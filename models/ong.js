const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Criação da schema ong com as colunas
 * name, email, endereco
 */
const ong = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    endereco: {
        type: String
    },
},{
    timestamps: true,
});

mongoose.model('Ong', ong);