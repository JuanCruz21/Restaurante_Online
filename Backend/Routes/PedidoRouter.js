const express = require('express');
const Pedido  = require('../Models/Pedido');
const PedidoRouter = express.Router()

PedidoRouter.get('/', (req,res)=>{
    Pedido.find()
        .then(datos => res.json(datos))
        .catch(error=> res.json({message: error}))
})

// Ruta POST
PedidoRouter.post('/', (req, res) => {
    const { clienteId, meseroId, platosIds, ...pedidoData } = req.body;
  
    Usuario.findById(clienteId)
      .then(cliente => {
        if (!cliente) {
          throw new Error('Cliente no encontrado');
        }
  
        Usuario.findById(meseroId)
          .then(async mesero => {
            if (!mesero) {
              throw new Error('Mesero no encontrado');
            }
  
            const platosPromises = platosIds.map(platoId => {
              return Plato.findById(platoId);
            });
  
            const platos = await Promise.all(platosPromises);
              const pedido = new Pedido({
                  ...pedidoData,
                  cliente: cliente._id,
                  mesero: mesero._id,
                  platos: platos.map(plato => plato._id),
                  estado: ['Pendiente','Activo','Finalizado','Cancelado']
              });
              return pedido.save();
          })
          .then(datos => res.json({ datos }))
          .catch(error => res.json({ message: error.message }));
      })
      .catch(error => res.json({ message: error.message }));
  });
  
  // Ruta PATCH
  PedidoRouter.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { clienteId, meseroId, platosIds, ...pedidoData } = req.body;
  
    Usuario.findById(clienteId)
      .then(cliente => {
        if (!cliente) {
          throw new Error('Cliente no encontrado');
        }
  
        return Usuario.findById(meseroId)
          .then(mesero => {
            if (!mesero) {
              throw new Error('Mesero no encontrado');
            }
  
            const platosPromises = platosIds.map(platoId => {
              return Plato.findById(platoId);
            });
  
            return Promise.all(platosPromises)
              .then(platos => {
                return Pedido.findByIdAndUpdate(id, {
                  ...pedidoData,
                  cliente: cliente._id,
                  mesero: mesero._id,
                  platos: platos.map(plato => plato._id)
                }, { new: true });
              });
          });
      })
      .then(datos => res.json({ datos }))
      .catch(error => res.json({ message: error.message }));
  });

PedidoRouter.delete('/:id', (req,res)=>{
    Pedido.deleteOne({_id: req.params.id})
        .then(datos => res.json({datos: datos}))
        .catch(error => res.json({error: error}))
})

module.exports = PedidoRouter