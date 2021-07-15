const { check, validationResult, checkSchema } = require("express-validator");
const express = require("express");
const { listarTipos } = require("../../db/controllers/tipo");

const router = express.Router();

router.get("/listado", async (req, res, next) => {
  const tipos = await listarTipos();
  res.json(tipos);
});

router.get("/tipos/tipo/:id", (req, res, next) => {});
router.post("/tipos/nuevo-tipo", (req, res, next) => {});
router.put("/tipos/tipo/:id", (req, res, next) => {});
router.delete("/tipos/tipo/:id", (req, res, next) => {});
module.exports = router;
