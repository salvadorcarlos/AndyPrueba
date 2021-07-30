const mongoose = require("mongoose");

const EstablecimientoSchema = new mongoose.Schema({
  cue: {
    type: String,
    unique: true,
    required: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  updated_date: {
    type: Date,
    default: Date.now,
  },
  encargado: {
    type: String,
    required: true,
  },
  domicilio: {
    type: String,
    required: true,
  },
  localidad: {
    type: String,
    required: true,
  },
  codigo:{
    type:String,
    required:true,
    minLength:2,
    maxLength:3,

  },
  telefono: {
    type:String,
    required: true,
    minLength: 7,
    maxLength: 11,
  },
  email: {
    type: String,
    required: true,
  }
});

module.exports = Establecimiento = mongoose.model(
  "establecimiento",
  EstablecimientoSchema
);
