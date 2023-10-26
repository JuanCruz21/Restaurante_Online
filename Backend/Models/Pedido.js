const mongoose = require('../DB/ConectionDB');
const Usuario = require('./Usuario');

const Pedido = mongoose.Schema({
    cantidad: { 
        type: Number, 
        unique: true, 
        require: true 
    },
    mesa: { 
        type: Number, 
        unique: 
        true, 
        require: true 
    },
    observaciones: { 
        type: String, 
        require: true 
    },
    cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    mesero: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    Platos: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Platos'
    },
    estado: [{
        type: String, 
        require: true 
    }]
}, {
    collection: 'Pedido',
    versionKey: false
})

module.exports = mongoose.model('Pedido', Pedido);