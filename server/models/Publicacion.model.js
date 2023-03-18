const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const PublicacionSchema = new Schema(
  {
    titulo: String,
    resumen: String,
    imagen: String,
    contenido: String,
    autor: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const PublicacionModelo = model("publicacion", PublicacionSchema);
module.exports = PublicacionModelo;
