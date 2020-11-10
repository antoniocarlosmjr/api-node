const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Criação da schema contato com as colunas
 * name, email, subject, content
 */
const contato = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    subject: {
        type: String
    },
    content: {
        type: String
    },
},{
    timestamps: true,
});

mongoose.model('Contato', contato);