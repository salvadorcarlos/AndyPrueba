const mongoose = require("mongoose");
const UsuarioSchema = new mongoose.Schema({
    nombreUser: {
      type: String,
      unique: true,
      required: true,
    },
    clave: {
      type: String,
      required: true,
    },
    updated_date: {
      type: Date,
      default: Date.now,
    },
    roll: {
      type: String,
      required: true,
    }
    
});module.exports = Usuario = mongoose.model(
    "usuario",
    UsuarioSchema
  );