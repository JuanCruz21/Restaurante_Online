const mongoose = require('mongoose');

let conexion = "mongodb+srv://fernelgarcia91:fernelgarcia91@clusterrestaurante.xgapmhl.mongodb.net/"

mongoose.connect(conexion)
.then(event=>console.log('Conexión exitosa'))
.catch(error=>console.log({message: error}))

module.exports = mongoose;