require("dotenv").config();
const mongoose = require("mongoose");
const mongoose_ip = process.env.MONGOOSE;

mongoose.set("strictQuery", true);
mongoose
  .connect(mongoose_ip, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conexion establecida con la Base de Datos"))
  .catch((err) =>
    console.log("Algo ha salido mal al conectarse a la Base de Datos", err)
  );
