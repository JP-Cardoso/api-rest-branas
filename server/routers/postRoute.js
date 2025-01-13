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

  try {
    const newPost = await postsService.savePosts(post);
    
    res.status(201).json(newPost);    
  } catch (error) {
    res.status(409).end();
  }
});

postRouter.put("/posts/:id", async (req, res) => {
  const post = req.body;

  try {
    await postsService.updatePosts(req.params.id, post);
    res.status(204).end();    
  } catch (error) {
    res.status(404).end(); 
  }
});

postRouter.delete("/posts/:id", async (req, res) => {

  await postsService.deletePosts(req.params.id);

  res.status(204).end();
});

module.exports = postRouter;