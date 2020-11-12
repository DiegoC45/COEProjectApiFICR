const Usuario = require('../models/usuario');

exports.salvar = (req, res) => {
    const { nome, sobrenome, email, senha } = req.body
    let novoUsuario = new Usuario({ nome, sobrenome, email, senha })
    novoUsuario.save((error, usuario) => {
        if (error) {
            res.send(error)
        }
        
        const response = {
            message: 'Usuário registrado com sucesso',
            data: usuario
        }
        res.status(201).json(response)
    })
};
