const { default: axios } = require("axios");

const express = require("express"),
  app = express(),
  puerto = 3000;

app.get("/", (_req, res) => {
  res.send("Este es nuestro BFF");
});

app.get("/s1", async (_req, res) => {
  const response = await axios.get(
    "http://service1-service.default.svc.cluster.local:3000"
  );
  res.send(response.data);
});

app.get("/s2", async (_req, res) => {
  const response = await axios.get(
    "http://service2-service.default.svc.cluster.local:3000"
  );
  res.send(response.data);
});

app.listen(puerto, (err) => {
  if (err) {
    console.error("Error escuchando: ", err);
    return;
  }
  console.log(`BFF en el puerto :${puerto}`);
});
