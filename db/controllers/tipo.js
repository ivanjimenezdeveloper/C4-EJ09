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
    const tipo = await Tipo.findById(idTipo);

    if (!tipo) {
      const nuevoError = new Error("No se encuentra el tipo que mostrar");
      nuevoError.codigo = 404;
      throw nuevoError;
    }

    return tipo;
  } catch (err) {
    const nuevoError = new Error("No se ha podido obtener el tipo");
    throw err.codigo ? err : nuevoError;
  }
};
const crearTipo = async (tipoACrear) => {
  try {
    const tipo = await Tipo.create(tipoACrear);

    return tipo;
  } catch (err) {
    const nuevoError = new Error("No se ha podido crear el tipo");
    throw err.codigo ? err : nuevoError;
  }
};

const editarTipo = async (id, tipoAModificar) => {
  try {
    const tipo = await Tipo.findByIdAndUpdate(id, tipoAModificar);

    return tipo;
  } catch (err) {
    const nuevoError = new Error("No se ha podido modificar el tipo");
    throw err.codigo ? err : nuevoError;
  }
};
const eliminarTipo = async (id) => {
  try {
    const tipo = await Tipo.findByIdAndDelete(id);

    return tipo;
  } catch (err) {
    const nuevoError = new Error("No se ha podido eliminar el tipo");
    throw err.codigo ? err : nuevoError;
  }
};

module.exports = {
  listarTipos,
  mostrarTipo,
  crearTipo,
  editarTipo,
  eliminarTipo,
};
