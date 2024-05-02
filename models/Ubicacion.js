const mongoose = require('mongoose');

const ubicacionSchema = mongoose.Schema({

    nombres:{
        type: String,
        require: true
    },

    cPostal:{
        type: Number,
        require: true
    },

    direccion:{
        type: String,
        require: true
    },

    municipio:{
        type: String,
        require: true
    },

},{versionkey:false});

module.exports = mongoose.model('Ubicacion', ubicacionSchema);