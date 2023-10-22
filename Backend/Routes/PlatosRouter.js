const express = require('express')
const Platos = require('../Models/Platos')
const PlatosRouter = express.Router()

PlatosRouter.get("/Platos", (req,res)=>{
    Platos.find()
     .then(datos=> res.json({Platos:datos}))
     .catch(error=> res.json({mesage:error}))
})

PlatosRouter.post("/Platos",(req,res)=>{
    const platos = new Platos(req,res)
    platos.save()
    .then(datos=>res.json({Platos: datos}))
    .catch(error=>res.json({menssage: error}))
})

PlatosRouter.put("/Platos",(req,res)=>{
    const platos = new Platos(req.body)
    Platos.updateOne({_id: Platos._id}, platos)
    .then(datos=>res.json({Platos: datos}))
    .catch(error=>res.json({menssage: error}))
})

PlatosRouter.delete('/Platos/:id', (req, res)=>{
    Platos.deleteOne({_id: req.params.id})
        .then(datos=>res.json(datos))
        .catch(error=>res.json({mensaje:error}));
});

module.exports = PlatosRouter;