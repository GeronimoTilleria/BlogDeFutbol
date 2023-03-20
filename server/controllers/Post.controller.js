const Post = require("../models/Post");
const fs = require("fs");
const secret = "asdfe45we45w345wegw345werjktjwertkj";
const jwt = require("jsonwebtoken");

module.exports.createPost = async (req, res) => {
  if (req.file === undefined) {
    res.status(400).json("error");
  } else {
    const { originalname, path } = req.file;
    const parts = originalname.split(".");
    const ext = parts[parts.length - 1];
    const newPath = path + "." + ext;
    fs.renameSync(path, newPath);

    const { token } = req.cookies;
    jwt.verify(token, secret, {}, async (err, info) => {
      if (err) throw err;
      const { tittle, summary, content } = req.body;
      const postDoc = await Post.create({
        tittle,
        summary,
        content,
        image: newPath,
        author: info.id,
      });
      res.json(postDoc);
    });
  }
};

module.exports.updatePost = async (req, res) => {
  let newPath = null;
  if (req.file) {
    const { originalname, path } = req.file;
    const parts = originalname.split(".");
    const ext = parts[parts.length - 1];
    newPath = path + "." + ext;
    fs.renameSync(path, newPath);
  }

  const { token } = req.cookies;
  jwt.verify(token, secret, {}, async (err, info) => {
    if (err) throw err;
    const { id, tittle, summary, content } = req.body;
    const postDoc = await Post.findById(id);
    const isAuthor = JSON.stringify(postDoc.author) === JSON.stringify(info.id);
    if (!isAuthor) {
      return res.status(400).json("you are not the author");
    }
    await postDoc.updateOne({
      tittle,
      summary,
      content,
      image: newPath ? newPath : postDoc.image,
    });

    res.json(postDoc);
  });
};

module.exports.findAllPosts = async (req, res) => {
  res.json(
    await Post.find()
      .populate("author", ["username"])
      .sort({ createdAt: -1 })
      .limit(20)
  );
};

module.exports.findById = async (req, res) => {
  const { id } = req.params;
  const postDoc = await Post.findById(id).populate("author", ["username"]);
  res.json(postDoc);
};

module.exports.deletePost = async (req, res) => {
  try {
    const deletedPost = await Post.deleteOne({
      _id: req.params.id,
    });
    res.json(deletedPost);
  } catch (error) {
    res.json(error);
  }
};
