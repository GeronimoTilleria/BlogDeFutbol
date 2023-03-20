const UserController = require("../controllers/User.controller");

module.exports = function (app) {
  app.post("/register", UserController.register);
  app.post("/login", UserController.login);
  app.post("/logout", UserController.logout);
  app.get("/profile", UserController.profile);
};
