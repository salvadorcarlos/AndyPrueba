const mongoose= require("mongoose");

const LocalidadSchema = new mongoose.Schema({
    nombre: {
      type: String,
      unique: true,
      required: true,
    },
    establecimientos:[{
        type: mongoose.Schema.ObjectId,
        ref:'Establecimiento',
    }]
});

module.exports= Localidad=mongoose.model(
    "localidad",
    LocalidadSchema
);

