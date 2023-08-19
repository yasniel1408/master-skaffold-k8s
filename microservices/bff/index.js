const { default: axios } = require("axios");

const express = require("express"),
  app = express(),
  puerto = 3000;

app.get("/", async (_req, res) => {
  res.send("BFF TEST");
});

app.get("/service1", async (_req, res) => {
  const response = await axios.get("http://localhost:3000");
  res.send(response.data);
});

app.get("/service2", async (_req, res) => {
  const response = await axios.get("http://localhost:3001");
  res.send(response.data);
});

app.listen(puerto, (err) => {
  if (err) {
    console.error("Error escuchando: ", err);
    return;
  }
  console.log(`BFF en el puerto :${puerto}`);
});
