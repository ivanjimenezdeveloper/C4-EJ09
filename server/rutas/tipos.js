const { check, validationResult, checkSchema } = require("express-validator");
const express = require("express");
const {
  listarTipos,
  mostrarTipo,
  crearTipo,
  editarTipo,
  eliminarTipo,
} = require("../../db/controllers/tipo");

const router = express.Router();

router.get("/listado", async (req, res, next) => {
  const tipos = await listarTipos();
  res.json(tipos);
});

router.get("/tipo/:id", async (req, res, next) => {
  const idTipo = req.params.id;

  const tipo = await mostrarTipo(idTipo);

  res.json(tipo);
});

router.post("/nuevo-tipo", async (req, res, next) => {
  const tipoACrear = req.body;
  const tipo = await crearTipo(tipoACrear);

  res.json(tipo);
});

router.put("/tipo/:id", async (req, res, next) => {
  const tipoAModificar = req.body;
  const idTipo = req.params.id;

  const tipo = await editarTipo(idTipo, tipoAModificar);

  res.json(tipo);
});
router.delete("/tipo/:id", async (req, res, next) => {
  const idTipo = req.params.id;

  const tipo = await eliminarTipo(idTipo);

  res.json(tipo);
});
module.exports = router;
