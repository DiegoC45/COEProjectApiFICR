const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const aulaSchema = new mongoose.Schema({
    visualizado: {
      type: String,
      required: true,
      default: false
    },
    video: {
        type: mongoose.Schema.Types.Mixed,
        ref: 'Video',
        required: true,
    },
  });

const matriculaSchema = new Schema([{
    aprovado: {
        type: Boolean,
        default: false,
        required: 'Favor informar se foi aprovado ou não.'
    },
 
    dataDeMatricula: {
        type: Date,
        default: Date.now,
        required: 'Favor informar a data de criação da matrícula.'
    },

    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true,
    },

    curso: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Curso',
        required: true,
    },

    aulas: [aulaSchema]

}])


module.exports = mongoose.model('Matricula', matriculaSchema);