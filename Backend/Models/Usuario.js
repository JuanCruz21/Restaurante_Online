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
        unique:true
    },
    identificacion:{
        type: String,
        unique:true
    },
    direccionCliente:{
        type: String,
        unique: true
    },
    telefonoCliente:{
        type: Number,
        unique: true
    },
    emailCliente:{
        type: String,
        unique: true
    },
    claveCliente:{
        type: String,
        unique: true
    },
    epsMesero:{
        type: String,
        unique:true
    },
    pensionMesero:{
        type: String,
        unique: true
    }
})