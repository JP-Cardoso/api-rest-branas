const postData = require("../data/postsData");

exports.getPosts = function () {
  return postData.getPosts();
}

exports.getPostsById = function (id) {
  return postData.getPostsById(id);
}

exports.savePosts = function (post) {
  return postData.savePosts(post);
}

exports.deletePosts = function (id) {
  return postData.deletePosts(id);
}

exports.updatePosts = function (id, data) {
  return postData.updatePosts(id, data);
}