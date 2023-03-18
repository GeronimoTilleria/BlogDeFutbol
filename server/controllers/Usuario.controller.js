const Usuario = require("../models/Usuario.model");
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);
const jwt = require("jsonwebtoken");
const secret = "asdfe45we45w345wegw345werjktjwertkj";

module.exports.register = async (req, res) => {
  const { usuario, contraseña } = req.body;
  try {
    const usuarioNuevo = await Usuario.create({
      usuario,
      contraseña: bcrypt.hashSync(contraseña, salt),
    });
    res.json(usuarioNuevo);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

module.exports.login = async (req, res) => {
  const { usuario, contraseña } = req.body;
  const usuarioLogin = await Usuario.findOne({ usuario });
  const verificar = bcrypt.compareSync(contraseña, usuarioLogin.contraseña);

  if (verificar) {
    jwt.sign({ usuario, id: usuarioLogin._id }, secret, {}, (err, token) => {
      if (err) throw err;
      res.cookie("token", token).json({
        id: usuarioLogin._id,
        usuario,
      });
    });
  } else {
    res.status(400).json("Datos erroneos");
  }
};

module.exports.perfil = (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, secret, {}, (err, info) => {
    if (err) throw err;
    res.json(info);
  });
};

module.exports.logout = (req, res) => {
  res.cookie("token", "").json("Ok");
};
