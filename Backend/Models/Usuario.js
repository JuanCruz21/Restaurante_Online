const mongoose = require('../DB/ConectionDB');

const Usuario = mongoose.Schema({
    nombreCliente:{
        type: String,
        unique: true
    }
})