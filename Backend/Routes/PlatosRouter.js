const express = require('express')
const Plato = require('../Models/Platos')
const PlatosRouter = express.Router()

PlatosRouter.get("/", (req,res)=>{
    Plato.find()
     .then(datos=> res.json({Platos:datos}))
     .catch(error=> res.json({mesage:error}))
})

PlatosRouter.post("/",(req,res)=>{
    const platos = new Plato(req.body)
    platos.save()
    .then(datos=>res.json({Platos: datos}))
    .catch(error=>res.json({menssage: error}))
})

PlatosRouter.patch("/",(req,res)=>{
    const platos = new Plato(req.body)
    Plato.updateOne({_id: platos._id}, platos)
    .then(datos=>res.json(datos))
    .catch(error=>res.json({menssage: error}))
})

PlatosRouter.delete('/:id', (req, res)=>{
    Plato.deleteOne({_id: req.params.id})
        .then(datos=>res.json({Platos: datos}))
        .catch(error=>res.json({mensaje:error}));
});

module.exports = PlatosRouter;