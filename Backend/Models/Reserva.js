const mongoose = require('../DB/ConectionDB');
//const Usuario = require('./Usuario');

const Reserva = mongoose.Schema({
    fechaReserva: { type: String, unique: true, require: true },
    horaReserva: { type: Number, unique: true, require: true },
    numeroPersonas: { type: String, require: true },
    cliente: { type: Usuario, require: true },
    estado: [{ type: String, require: true }]
}, {
    collection: 'Reserva',
    versionKey: false
})

module.exports = mongoose.model('Reserva', Reserva);