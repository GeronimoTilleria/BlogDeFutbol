const PostController = require("../controllers/Post.controller");
const multer = require("multer");
const uploadMiddleware = multer({ dest: "uploads/" });

module.exports = function (app) {
  app.post("/post", uploadMiddleware.single("file"), PostController.createPost);
  app.put("/post", uploadMiddleware.single("file"), PostController.updatePost);
  app.get("/post", PostController.findAllPosts);
  app.get("/post/:id", PostController.findById);
  app.delete("/post/:id", PostController.deletePost);
};
