const postData = require("../data/postsData");

exports.getPosts = function () {
  return postData.getPosts();
}

exports.getPostsById = async function (id) {
  const post = await postData.getPostsById(id);

  if(!post) throw new Error("Post not found");

  return post;
}

exports.savePosts = async function (post) {
  const existingPost = await postData.getPostsByTitle(post.title);

  if(existingPost) throw new Error("Post already exists");

  return postData.savePosts(post);
}

exports.deletePosts = function (id) {
  return postData.deletePosts(id);
}

exports.updatePosts = async function (id, data) {
  await exports.getPostsById(id)
  return postData.updatePosts(id, data);
}