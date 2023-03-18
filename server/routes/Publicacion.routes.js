const PubliControlador = require("../controllers/Publicacion.controller");
const multer = require("multer");
const uploadMiddleware = multer({ dest: "uploads/" });

module.exports = function (app) {
  app.post(
    "/publicacion",
    uploadMiddleware.single("file"),
    PubliControlador.publicar
  );
  app.put(
    "/publicacion",
    uploadMiddleware.single("file"),
    PubliControlador.editar
  );
  app.get("/publicacion", PubliControlador.obtenerPublicaciones);
  app.get("/publicacion/:id", PubliControlador.obtenerPublicacionId);
};
