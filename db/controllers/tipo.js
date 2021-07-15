const Tipo = require("../model/Tipo");

const listarTipos = async () => {
  try {
    const tipos = await Tipo.find();

    if (!tipos) {
      const nuevoError = new Error("No hay tipos que mostrar");
      nuevoError.codigo = 404;
      throw nuevoError;
    }

    return tipos;
  } catch (err) {
    const nuevoError = new Error("No se ha podido obtener el listado de tipos");
    throw err.codigo ? err : nuevoError;
  }
};

const mostrarTipo = async (idTipo) => {
  try {
    const tipo = await Tipo.find({
      _id: idTipo,
    });

    if (!tipo) {
      const nuevoError = new Error("No se encuentra el tipo que mostrar");
      nuevoError.codigo = 404;
      throw nuevoError;
    }

    return tipo;
  } catch (err) {
    const nuevoError = new Error("No se ha podido obtener el listado de tipos");
    throw err.codigo ? err : nuevoError;
  }
};

module.exports = { listarTipos, mostrarTipo };
