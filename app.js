const express = require("express");
const path = require("path");
const app = express();


// Recursos
const pubicPath = (path.resolve(__dirname, "./public"));
app.use(express.static(pubicPath));


//Rutas
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/home.html"));
});







//Llamado al servidor
app.listen(3010, () => {
  console.log(" Servidor corriendo en http://localhost:3010 ");
});

