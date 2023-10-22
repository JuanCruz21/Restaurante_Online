const express = require('express');
const Reserva = require('../Models/Reserva');
const Reserva = require('../Models/Reserva');
const ReservaRouter = express.Router();

//Crear Reserva
ReservaRouter.post('/', (req, res) => {
    const Reserva = new Reserva(req, res);
    Reserva.save()
        .then(datos => res.json(datos))
        .catch(error => res.json({ mensaje: error }));
});

//Ver Reservas
ReservaRouter.get('/', (req, res) => {
    Reserva.find()
        .then(datos => res.json({ Reserva: datos }))
        .catch(error => res.json({ mensaje: error }));
});



//Modificar Reserva
ReservaRouter.patch('/', (req, res) => {
    const Reserva = new Reserva(req.body);
    Reserva.updateOne({ _id: Reserva._id }, Reserva)
        .then(datos => res.json(datos))
        .catch(error => res.json({ mensaje: error }));
});

//Eliminar Reservas
ReservaRouter.delete('/:id', (req, res) => {
    Reserva.deleteOne({ _id: req.params.id })
        .then(datos => res.json(datos))
        .catch(error => res.json({ mensaje: error }));
});

module.exports = ReservaRouter;
