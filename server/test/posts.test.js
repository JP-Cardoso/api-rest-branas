const axios = require("axios");
const postService = require("../service/postService");
const crypto = require("node:crypto");

const generate = function () {
  return crypto.randomBytes(20).toString("hex");
}

const request = function ({ url, method, data }) {
  return axios({ url, method, data });
}

test("should get posts", async () => {
  //given - dado que
  const post1 = await postService.savePosts({
    title: generate(),
    content: generate(),
  });

  const post2 = await postService.savePosts({
    title: generate(),
    content: generate(),
  });

  const post3 = await postService.savePosts({
    title: generate(),
    content: generate(),
  });

  //when - quando acontecer
  const response = await request({
    url: "http://localhost:3000/posts",
    method: "GET"
  });

  //then - então
  const posts = response.data;
  expect(posts).toHaveLength(3);

  await postService.deletePosts(post1.id);
  await postService.deletePosts(post2.id);
  await postService.deletePosts(post3.id);
})

test("should save post", async () => {
  //given - dado que
  const data = {
    title: generate(),
    content: generate(),
  };

  //when - quando acontecer
  const response = await request({
    url: "http://localhost:3000/posts",
    method: "POST",
    data
  });

  //then - então
  const post = response.data;
  expect(post.title).toBe(data.title);
  expect(post.content).toBe(data.content);
  await postService.deletePosts(post.id);
})

test("should update a post", async () => {
  //given - dado que
  const post = await postService.savePosts({
    title: generate(),
    content: generate(),
  });

  post.title = generate();
  post.content = generate();

  //when - quando acontecer
  await request({
    url: `http:localhost:3000/posts/${post.id}`,
    method: "PUT",
    data: post
  })

  const updatedPost = await postService.getPostsById(post.id);
  
  //then - então
  expect(updatedPost.title).toBe(post.title);
  expect(updatedPost.content).toBe(post.content);
  await postService.deletePosts(post.id);
})

test("should delete a post", async () => {
  //given - dado que
  const post = await postService.savePosts({
    title: generate(),
    content: generate(),
  });

  //when - quando acontecer
  await request({
    url: `http:localhost:3000/posts/${post.id}`,
    method: "DELETE",
  })

  //then - então
  const posts = await postService.getPosts();
  expect(posts).toHaveLength(0);
})