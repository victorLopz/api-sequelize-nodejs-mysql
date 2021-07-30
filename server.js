const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hola API de prueba");
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

// declaraciones de las rutas
const materia = require("./routes/materia");
const usuarios = require("./routes/users");
const notas = require("./routes/notas");

//Rutas
app.use("/api/v2/materia", materia);
app.use("/api/v2/user", usuarios);
app.use("/api/v2/notas", notas);
