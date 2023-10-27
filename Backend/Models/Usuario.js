const mongoose = require('../DB/ConectionDB');

const Usuario = mongoose.Schema({
    nombreCliente:{
        type: String,
        unique: true
    },
    apellidoCliente:{
        type: String,
        unique: true
    },
    tipoIdentificacion:{
        type: String,
        unique:true, require:true
    },
    identificacion:{
        type: String,
        unique:true, require:true
    },
    direccionCliente:{
        type: String,
        unique: true, require:true
    },
    telefonoCliente:{
        type: Number,
        unique: true, require:true
    },
    emailCliente:{
        type: String,
        unique: true, require:true
    },
    claveCliente:{
        type: String,
        unique: true, require:true
    },
    epsMesero:{
        type: String,
        unique:true, require:true
    },
    pensionMesero:{
        type: String,
        unique: true, require:true
    }
},{
    collection: 'Usuario',
    versionKey: false
})

   module.exports = mongoose.model('Usuario', Usuario);