const mongoose = require('../config/database');

const AulaSchema = new mongoose.Schema({
    titulo: {
      type: String,
      required: true,
    },
    conteudo: {
        type: String,
        required: false,
    },
    videoUrl: {
        type: String,
        required: false,
    },
    nrOrdem: {
        type: Number,
        required: true,
    },
    curso: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Curso',
        required: true,
    },
});

module.exports = mongoose.model('Aula', AulaSchema);