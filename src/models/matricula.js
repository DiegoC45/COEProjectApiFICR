const mongoose = require('mongoose')
const matriculaRoutes = require('../routes/matricula')
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
}])



module.exports = mongoose.model('Matricula', matriculaSchema)