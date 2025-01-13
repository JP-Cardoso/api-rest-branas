const db = require("../infra/database");

exports.getPosts = function () {
  return db.query("select * from blog.post");
}

exports.getPostsById = function (id) {
  return db.oneOrNone("select * from blog.post where id = $1", [id]);
}

exports.getPostsByTitle = function (title) {
  return db.oneOrNone("select * from blog.post where title = $1", [title]);
}

exports.savePosts = function (post) {
  return db.one("insert into blog.post (title, content) values ($1, $2) returning *", [post.title, post.content]);
}

exports.deletePosts = function (id) {
  return db.none('delete from blog.post where id = $1', [id]);
}

exports.updatePosts = function (id, post) {
  return db.none("update blog.post set title = $1, content = $2 where id = $3", [post.title, post.content, id])
}