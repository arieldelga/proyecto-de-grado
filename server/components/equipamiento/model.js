const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    nombre: String,
    marca: String,
    estado: String,
    ultimoUso: {
        fecha: Date,
        observacion: String
    }
});

const model = mongoose.model('Equipamiento', mySchema);
module.exports = model;