const express = require('express');
const postRouter = express.Router();
const postsService = require("../service/postService");

postRouter.get("/posts", async (req, res) => {
  const posts = await postsService.getPosts();

  res.json(posts);
});

postRouter.get("/posts/:id", async (req, res) => {
  const { id } = req.params;

  const post = await postsService.getPostsById(id);

  res.status(200).json(post);
});

postRouter.post("/posts", async (req, res) => {
  const post = req.body;

  const newPost = await postsService.savePosts(post);

  res.status(201).json(newPost);
});

postRouter.put("/posts/:id", async (req, res) => {
  const post = req.body;
  await postsService.updatePosts(req.params.id, post);
  res.end();
});

postRouter.delete("/posts/:id", async (req, res) => {
  await postsService.deletePosts(req.params.id);
  res.end();
});

module.exports = postRouter;