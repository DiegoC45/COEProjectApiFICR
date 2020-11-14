const mongoose = require('../config/database');

const usuarioSchema = new mongoose.Schema([{
    nome: {
        type: String,
        required: 'Favor informar o seu nome.'
    },

    sobrenome: {
        type: String,
        required: 'Favor informar o seu sobrenome.'
    },

    email: {
        type: String,
        required: 'Favor informar o seu email.',
        unique: true
    },

    senha: {
        type: String,
        required: 'Favor informar uma senha de 8 caracteres alfanúmericos.'
    },

}])

module.exports = mongoose.model('Usuario', usuarioSchema);