require("dotenv").config();
const express = require("express");
const cors = require("cors");
const debug = require("debug")("api-tipos:servidor:init");
const chalk = require("chalk");
const morganfreeman = require("morgan");
const tiposRutas = require("./rutas/tipos");

const app = express();

const puerto = process.env.PORT || process.env.PUERTO_SERVIDOR || 5000;

const iniciaServidor = () => {
  const servidor = app.listen(puerto, () => {
    debug(chalk.yellow(`Servidor iniciado en el puerto ${puerto}`));
  });

  app.use(morganfreeman("dev"));
  app.use(cors());
  app.use(express.json());

  app.use("/tipos", tiposRutas);

  servidor.on("error", (err) => {
    debug(
      chalk.red.bold(`Error al iniciar el servidor en el puerto ${puerto}`)
    );
    if (err.code === "EADDRINUSE") {
      debug(chalk.red.bold(`El puerto ${puerto} está ocupado`));
    }
  });
};

module.exports = {
  app,
  iniciaServidor,
};
