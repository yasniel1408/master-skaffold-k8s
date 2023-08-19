const express = require("express"),
  app = express(),
  puerto = 3000;

app.get("/", (peticion, respuesta) => {
  let agenteDeUsuario = peticion.header("user-agent");
  respuesta.send("SERVICE 2 :" + agenteDeUsuario);
});

app.listen(puerto, (err) => {
  if (err) {
    console.error("Error escuchando: ", err);
    return;
  }
  console.log(`Escuchando en el puerto :${puerto}`);
});
