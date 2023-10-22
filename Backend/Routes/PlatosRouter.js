const express = require('express')
const Plato = require('../Models/Platos')
const PlatosRouter = express.Router()

PlatosRouter.get("/", (req,res)=>{
    Plato.find()
     .then(datos=> res.json({Platos:datos}))
     .catch(error=> res.json({mesage:error}))
})

PlatosRouter.post("/",(req,res)=>{
    const platos = new Platos(req,res)
    platos.save()
    .then(datos=>res.json({Platos: datos}))
    .catch(error=>res.json({menssage: error}))
})

PlatosRouter.put("/",(req,res)=>{
    const platos = new Platos(req.body)
    Plato.updateOne({_id: Platos._id}, platos)
    .then(datos=>res.json({Platos: datos}))
    .catch(error=>res.json({menssage: error}))
})

PlatosRouter.delete('/:id', (req, res)=>{
    Plato.deleteOne({_id: req.params.id})
        .then(datos=>res.json({Platos: datos}))
        .catch(error=>res.json({mensaje:error}));
});

module.exports = PlatosRouter;