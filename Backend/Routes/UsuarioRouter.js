const express = require('express');
const Usuario = require('../Models/Usuario');
const UsuarioRouter = express.Router();

//LISTAR USUARIOS
UsuarioRouter.get('/', (req, res)=> {
    Usuario.findById()
        .then(datos=> res.json({Usuarios:datos}))
        .catch(error=>res.json({mensaje:error}))
});

//GUARDAR REGIONES
UsuarioRouter.post('/', (req,res)=>{
    const usuario = new Usuario(req,res);
    usuario.save()
    .then(datos=>{res.json(datos)})
    .catch(error=>res.json({mensaje:error}))
});
