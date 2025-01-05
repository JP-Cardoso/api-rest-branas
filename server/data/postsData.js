const db = require("../infra/database");

exports.getPosts = () =>{
  return db.query("select * from blog.post");
}