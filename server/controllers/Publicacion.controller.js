const Publicacion = require("../models/Publicacion.model");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const secret = "asdfe45we45w345wegw345werjktjwertkj";

//post
module.exports.publicar = async (req, res) => {
  const { originalname, ruta } = req.file;
  const partes = originalname.split(".");
  const ext = partes[partes.length - 1];
  const nuevaRuta = ruta + "." + ext;
  fs.renameSync(ruta, nuevaRuta);

  const { token } = req.cookies;
  jwt.verify(token, secret, {}, async (err, info) => {
    if (err) throw err;
    const { titulo, resumen, contenido } = req.body;
    const nuevaPublicacion = await Publicacion.create({
      titulo,
      resumen,
      contenido,
      imagen: nuevaRuta,
      autor: info.id,
    });
    res.json(nuevaPublicacion);
  });
};

//put
module.exports.editar = async (req, res) => {
  let nuevaRuta = null;
  if (req.file) {
    const { originalname, ruta } = req.file;
    const partes = originalname.split(".");
    const ext = partes[partes.length - 1];
    nuevaRuta = ruta + "." + ext;
    fs.renameSync(ruta, nuevaRuta);
  }

  const { token } = req.cookies;
  jwt.verify(token, secret, {}, async (err, info) => {
    if (err) throw err;
    const { id, titulo, resumen, contenido } = req.body;
    const nuevaPublicacion = await Publicacion.findById(id);
    const esAutor =
      JSON.stringify(nuevaPublicacion.autor) === JSON.stringify(info.id);
    if (!esAutor) {
      return res.status(400).json("No eres el autor");
    }
    await nuevaPublicacion.updateOne({
      titulo,
      resumen,
      contenido,
      imagen: nuevaRuta ? nuevaRuta : nuevaPublicacion.imagen,
    });
    res.json(nuevaPublicacion);
  });
};

//get
module.exports.obtenerPublicaciones = async (req, res) => {
  res.json(
    await Publicacion.find()
      .populate("autor", ["usuario"])
      .sort({ createdAt: -1 })
      .limit(20)
  );
};

//get
module.exports.obtenerPublicacionId = async (req, res) => {
  const { id } = req.params;
  const Publi = await Publicacion.findById(id).populate("autor", ["usuario"]);
  res.json(Publi);
};
