const express = require('express');
const Usuario = require('../Models/Usuario');
const UsuarioRouter = express.Router();

//LISTAR USUARIOS
UsuarioRouter.get('/', (req, res)=> {
    Usuario.find()
        .then(datos=> res.json({Usuarios:datos}))
        .catch(error=>res.json({mensaje:error}));
});

//GUARDAR USUARIOS
UsuarioRouter.post('/', (req,res)=>{
    const usuario = new Usuario(req,res);
    usuario.save()
        .then(datos=>res.json(datos))
        .catch(error=>res.json({mensaje:error}));
});

//ACTUALIZAR USUARIOS
UsuarioRouter.patch('/', (req, res)=>{
    const usuario = new Usuario(req.body);
    Usuario.updateOne({_id: Usuario._id}, usuario)
        .then(datos=>res.json(datos))
        .catch(error=>res.json({mensaje:error}));
});

//ELIMINAR USUARIO
UsuarioRouter.delete('/:id', (req, res)=>{
    Usuario.deleteOne({_id: req.params.id})
        .then(datos=>res.json(datos))
        .catch(error=>res.json({mensaje:error}));
});

module.exports = UsuarioRouter;
