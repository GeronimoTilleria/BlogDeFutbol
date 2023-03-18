const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const UsuarioSchema = new Schema({
  usuario: { type: String, required: true, min: 4, unique: true },
  contraseña: { type: String, required: true },
});

const ModeloUsuario = model("usuario", UsuarioSchema);
module.exports = ModeloUsuario;
