const axios = require("axios");

test("should get posts", async () => {

  const response = await axios({
    url: "https://localhost:3000/posts",
    method: "GET"
  });

  const posts = response.data;
  expect(posts).toHaveLength(3);
  const [firstPost] = posts;
  expect(firstPost.id).toBe(1);
})