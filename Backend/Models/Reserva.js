const mongoose = require('../DB/ConectionDB');
const Usuario = require('./Usuario');

const Reserva = mongoose.Schema({
    fechaReserva: { type: String, unique: true, require: true },
    horaReserva: { type: String, unique: true, require: true },
    numeroPersonas: { type: Number, require: true },
    cliente: {type: mongoose.Schema.Types.ObjectId,ref: 'Usuario'},
    estado: [
        {
            type: String,
            enum: ['Confirmada', 'Cancelada'] // Define los estados permitidos aquí
        }
    ]
}, {
    collection: 'Reserva',
    versionKey: false
})

module.exports = mongoose.model('Reserva', Reserva);