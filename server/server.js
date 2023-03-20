const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static(__dirname + "/uploads"));

require("./config/mongoose.config");

require("./routes/User.routes")(app);

require("./routes/Post.routes")(app);

app.listen(8000, () => console.log("Conectado al servidor"));
