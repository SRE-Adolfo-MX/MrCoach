const express = require("express");
const app = express();
const port = 8000;


app.get("/", (req, res) => {
  res.send("<h1>Hello Trainer!</h1>");
});

app.get("/alumnos", (req, res) => {
  res.send("<h1>Lista de Alumnos</h1>");
});

app.get("/rutinas", (req, res) => {
  res.send("<h1>Lista de Rutinas</h1>");
});

app.get("/ejercicios", (req, res) => {
  res.send("<h1>Lista de Ejercicios</h1>");
});


app.listen(port, () => {
  console.log(`Listening on port: http://localhost:${port}`);
});