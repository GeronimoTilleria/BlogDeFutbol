const Post = require("../models/Post");
const fs = require("fs");
const secret = "asdfe45we45w345wegw345werjktjwertkj";
const jwt = require("jsonwebtoken");

module.exports.createPost = async (req, res) => {
  try {
    if (!req.file) {
      throw new Error("No file was uploaded.");
    }
    const { originalname, path } = req.file;
    const parts = originalname.split(".");
    const ext = parts[parts.length - 1];
    const newPath = path + "." + ext;
    fs.renameSync(path, newPath);

    const { token } = req.cookies;
    const info = jwt.verify(token, secret);
    const { title, summary, content } = req.body;
    const postDoc = await Post.create({
      title,
      summary,
      content,
      cover: newPath,
      author: info.id,
    });
    res.json(postDoc);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports.updatePost = async (req, res) => {
  try {
    const { id, title, summary, content } = req.body;
    const postDoc = await Post.findById(id);
    if (!postDoc) {
      throw new Error("Post not found.");
    }

    const { token } = req.cookies;
    const info = jwt.verify(token, secret);
    if (JSON.stringify(postDoc.author) !== JSON.stringify(info.id)) {
      throw new Error("You are not the author.");
    }

    let coverPath = postDoc.cover;
    if (req.file) {
      const { originalname, path } = req.file;
      const parts = originalname.split(".");
      const ext = parts[parts.length - 1];
      coverPath = path + "." + ext;
      fs.renameSync(path, coverPath);
    }

    await postDoc.updateOne({
      title,
      summary,
      content,
      cover: coverPath,
    });
    res.json(postDoc);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports.findAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("author", ["username"])
      .sort({ createdAt: -1 })
      .limit(20);
    res.json(posts);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports.findById = async (req, res) => {
  try {
    const postDoc = await Post.findById(req.params.id).populate("author", [
      "username",
    ]);
    if (!postDoc) {
      throw new Error("Post not found.");
    }
    res.json(postDoc);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports.deletePost = async (req, res) => {
  try {
    const deletedPost = await Post.deleteOne({
      _id: req.params.id,
    });
    res.json(deletedPost);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
