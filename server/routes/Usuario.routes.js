const UsuarioControlador = require("../controllers/Usuario.controller");

module.exports = function (app) {
  app.post("/register", UsuarioControlador.register);
  app.post("/login", UsuarioControlador.login);
  app.get("/perfil", UsuarioControlador.perfil);
  app.post("/logout", UsuarioControlador.logout);
};
