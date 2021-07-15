const { check, validationResult, checkSchema } = require("express-validator");
const express = require("express");
const { listarTipos, mostrarTipo } = require("../../db/controllers/tipo");

const router = express.Router();

router.get("/listado", async (req, res, next) => {
  const tipos = await listarTipos();
  res.json(tipos);
});

router.get("/tipo/:id", async (req, res, next) => {
  const idTipo = req.params.id;

  const tipo = await mostrarTipo(idTipo);

  return tipo;
});
router.post("/nuevo-tipo", (req, res, next) => {});
router.put("/tipo/:id", (req, res, next) => {});
router.delete("/tipo/:id", (req, res, next) => {});
module.exports = router;
