const express = require('express');
const postRouter = express.Router();
const postsService = require("../service/postService");

postRouter.get("/posts", async(req, res) => {
  const posts = await postsService.getPosts();

  res.json(posts);
});

postRouter.get("/posts/:id", async(req, res) => {});
postRouter.post("/posts", async(req, res) => {});
postRouter.put("/posts/:id", async(req, res) => {});
postRouter.delete("/posts/:id", async(req, res) => {});

module.exports = postRouter;