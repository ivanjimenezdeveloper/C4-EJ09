const { Schema, model } = require("mongoose");

const TipoSchema = new Schema({
  tipo: String,
});

const Tipo = model("Tipo", TipoSchema, "tipos");

module.exports = Tipo;
