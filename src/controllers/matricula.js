const mongoose = require('mongoose')
const Matricula = require('../models/matricula');
const Video = require('../models/video');

exports.createMatricula = (req, res) => {
    const { usuario, curso } = req.body

    if (!(usuario && curso)) {
        return res.status(422).send({
            message: 'Curso e usuários são obrigatórios.'
        });
    }

    Video.find({ curso: mongoose.Types.ObjectId(curso) },
        (error, videos) => {
            if (error) {
                return res.send(error).status(400);
            }

            const aulas = [];
            videos.forEach(video => aulas.push({ video, visualizado: false }));
            
            new Matricula({
                usuario: mongoose.Types.ObjectId(usuario),
                curso: mongoose.Types.ObjectId(curso),
                aulas
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
    )

    
}

exports.getMatriculasByUsuario = (req, res) => {

    const where = {
        usuario: {
            _id: mongoose.Types.ObjectId(req.params.id)
        }
    }

    const { aprovado } = req.query;

    if (aprovado != null) {
        where.aprovado = aprovado;
    }

    Matricula.find(where,
        (error, matriculas) => {
            if (error) {
                return res.send(error).status(400);
            }

            res.send(matriculas).status(200);
        }
    )
    .populate('curso')
    .populate('aulas.video')
}

exports.update = (req, res) => {

    const { id } = req.params;

    if (!id)
        return res.status(400).send({
            message: 'O ID é obrigatório.' 
        });

        Matricula.findByIdAndUpdate(id, req.body, { new: true },
            (error, matricula) => {
                if(!matricula) {
                    return res.status(404).send({
                        message: 'Matricula não encontrada.'
                    });
                }

                matricula.aprovado = !matricula.aulas.some(aula => !aula.visualizado);
                matricula.save();
                return res.status(200).send(matricula);
            }
    )
    .populate('curso')
    .populate('aulas.video');
}