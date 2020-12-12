const Curso = require('../models/curso');

exports.listar = (req, res) => {

    const { q } = req.query;
    const where = {}

    if (q) where.nome = new RegExp(q, 'i');

    Curso.find(where,
        (err, categorias) => {
            return res.send(categorias).status(200);
        }
    );
};


exports.buscarPorId = (req, res) => {

    const { id } = req.params;

    if (!id)
        return res.status(400).send({
            message: 'O ID é obrigatório.' 
        });

        Curso.findOne({ _id: id },
        (error, curso) => {
            if(!curso) {
                return res.status(404).send({
                    message: 'Curso não encontrado.'
                });
            }

            return res.status(200).send(curso);
        }
    );
}