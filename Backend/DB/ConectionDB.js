const mongoose = require('mongoose');

let conexion = "mongodb+srv://reyreyes2:reyreyes2@cluster0.zfseznu.mongodb.net/"

mongoose.connect(conexion)
.then(event=>console.log('Conexión exitosa'))
.catch(error=>console.log({message: error}))

module.exports = mongoose;