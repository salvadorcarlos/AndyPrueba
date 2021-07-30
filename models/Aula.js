const mongoose=require ("mongoose");

const AulaSchema= new mongoose.Schema({
    numero:{
        type:String,
        unique:true,
        require:true,
    },
    dimensiones:{
        type:String,
        require:true,
    },
    capacidadTotal: {
        type:String,
        require:true,
    },
    aforo:{
        type:String,
        require:true,
    

    },
    descripcion:{
        type:String,
        require:true,

    }

});


module.exports = Aula= mongoose.model(
    "aula",
    AulaSchema
)