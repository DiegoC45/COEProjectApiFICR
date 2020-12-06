const mongoose = require('../config/database');

const CursoSchema = new mongoose.Schema({
    nome: {
      type: String,
      required: true,
    },
    descricao: {
        type: String,
        required: true,
    },
    badge: {
        type: String,
        required: true,
    },
    categoria: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categoria',
        required: true,
    },
});

module.exports = mongoose.model('Curso', CursoSchema);