const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Criação da schema empresa com as colunas
 * name, email, cnpj
 */
const empresa = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    cnpj: {
        type: String
    },
},{
    timestamps: true,
});

mongoose.model('Empresa', empresa);