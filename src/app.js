const express = require("express");
const app = express();
const cors = require("cors");
const start = () => console.log("Server running on http://localhost:5000");
const port = process.env.PORT || 5000;

//Configuración para poder compartir la API
app.use(cors());

// Inicio de servidor
app.listen(port, start());

//Middleware para la propiedad req.body:
app.use(express.urlencoded({ extended: true }));

//Parseo de request en JSON
app.use(express.json());

//Rutas:
app.use(require("./routes/apiRoutes"));

//Middleware de manejo de errores:
app.use(function (err, req, res, next) {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  console.log(err);
  res.status(status).json({ message });
});
