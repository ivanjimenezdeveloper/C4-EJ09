const {
  check,
  validationResult,
  checkSchema,
  body,
} = require("express-validator");
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

router.get(
  "/tipo/:id",
  check("id", "Id incorrecta").isMongoId(),
  (req, res, next) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
      console.log(errores.array());
      const nuevoError = new Error(errores.array().map((error) => error.msg));
      nuevoError.codigo = 400;
      return next(nuevoError);
    }
    next();
  },
  async (req, res, next) => {
    const idTipo = req.params.id;

    const tipo = await mostrarTipo(idTipo);

    res.json(tipo);
  }
);

router.post(
  "/nuevo-tipo",
  body("tipo", "no es correcto maestro").isAlpha(),
  (req, res, next) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
      console.log(errores.array());
      const nuevoError = new Error(errores.array().map((error) => error.msg));
      nuevoError.codigo = 400;
      return next(nuevoError);
    }
    next();
  },
  async (req, res, next) => {
    const tipoACrear = req.body;
    const tipo = await crearTipo(tipoACrear);

    res.json(tipo);
  }
);

router.put(
  "/tipo/:id",
  check("id", "Id incorrecta").isMongoId(),
  body("tipo", "no es correcto maestro").isAlpha(),
  (req, res, next) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
      console.log(errores.array());
      const nuevoError = new Error(errores.array().map((error) => error.msg));
      nuevoError.codigo = 400;
      return next(nuevoError);
    }
    next();
  },
  async (req, res, next) => {
    const tipoAModificar = req.body;
    const idTipo = req.params.id;

    const tipo = await editarTipo(idTipo, tipoAModificar);

    res.json(tipo);
  }
);
router.delete(
  "/tipo/:id",
  check("id", "Id incorrecta").isMongoId(),
  (req, res, next) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
      console.log(errores.array());
      const nuevoError = new Error(errores.array().map((error) => error.msg));
      nuevoError.codigo = 400;
      return next(nuevoError);
    }
    next();
  },
  async (req, res, next) => {
    const idTipo = req.params.id;

    const tipo = await eliminarTipo(idTipo);

    res.json(tipo);
  }
);
module.exports = router;
