const mongoose = require('../DB/ConectionDB');

const platos = mongoose.Schema({
    nombrePlato: 
    {   type: String,
        unique: true, 
        require:true
    },
    precioPlato: 
    { 
        type: Number,
        unique: true, 
        require:true
    },
    observacionPlato: 
    { 
        type: String,
        require:true 
    }
},{
 collection: 'Platos',
 versionKey: false
})

module.exports = mongoose.model('Platos', platos);