const mongoose = require('mongoose')
const matricula = mongoose.model('Matricula')


exports.createMatricula = (req, res) => {
    const { aprovado, dataDeMatricula, usuario, curso  } = req.body
    let novaMatricula = new matricula({ aprovado, dataDeMatricula, usuario, curso })
    novaMatricula.save((error, matricula) => {
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