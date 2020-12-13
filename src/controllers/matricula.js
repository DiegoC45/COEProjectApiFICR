const mongoose = require('mongoose')
const Matricula = require('../models/matricula');

exports.createMatricula = (req, res) => {
    const { usuario, curso } = req.body

    if (!(usuario && curso)) {
        return res.status(422).send({
            message: 'Curso e usuários são obrigatórios.'
        });
    }

    new Matricula({
        usuario: mongoose.Types.ObjectId(usuario),
        curso: mongoose.Types.ObjectId(curso)
    })
        .save((error, matricula) => {
            if (error) {
                return res.send(error).status(400);
            }
            let response = {
                message: 'Matrícula efetivada com sucesso.',
                data: matricula
            }
            res.status(201).json(response)
    })
}