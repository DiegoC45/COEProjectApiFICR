const mongoose = require('../config/database');

const VideoSchema = new mongoose.Schema({
    nome: {
      type: String,
      required: true,
    },
    conteudo: {
        type: String,
        required: false,
    },
    url: {
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

module.exports = mongoose.model('Video', VideoSchema);