require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

const puerto = process.env.PORT;

require("./config/mongoose.config");

app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/uploads", express.static(__dirname + "/uploads"));

require("./routes/Usuario.routes")(app);
require("./routes/Publicacion.routes")(app);

app.listen(puerto, () =>
  console.log(`Servidor conectado en el puerto ${puerto}`)
);
