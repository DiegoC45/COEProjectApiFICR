const mongoose = require('mongoose')
const Schema = mongoose.Schema

const matriculaSchema = new Schema([{
    aprovado: {
        type: Boolean,
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


}])

module.exports = mongoose.model('Matricula', matriculaSchema);