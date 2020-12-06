const Categoria = require('../models/categoria');

exports.listar = (req, res) => {

    const { q } = req.query;
    const where = {}

    if (q) where.nome = new RegExp(q, 'i');

    Categoria.find(where,
        (err, categorias) => {
            return res.send(categorias).status(200);
        });
};


exports.buscarPorId = (req, res) => {

    const { id } = req.params;

    if (!id)
        return res.status(400).send({
            message: 'O ID é obrigatório.' 
        });

    Categoria.findOne({ _id: id },
        (error, categoria) => {
            if(!categoria) {
                return res.status(404).send({
                    message: 'Categoria não encontrada.'
                });
            }

            return res.status(200).send(categoria);
        }
    );
}