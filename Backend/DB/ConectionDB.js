const mongoose = require('mongoose');

let conexion = "url mongo"

mongoose.connect(conexion)
.then(event=>console.log('Conexión exitosa'))
.catch(error=>console.log({message: error}))

module.exports = mongoose;
