const mongoose = require("mongoose");

const ProvinciaSchema = new mongoose.Schema({
    nombre: {
        type: String,
         unique: true,
         required: true,
    },

    localidades:{
        type: Array,
        require:true,

    },
    
        
        establecimientos:[{
            type: mongoose.Schema.ObjectId,
            ref:'Establecimiento'
        }]



    
});
    module.exports = Provincia = mongoose.model(
        "provincia",
        ProvinciaSchema
      );
      

