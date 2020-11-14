const bcrypt = require('bcrypt');
const Usuario = require('../models/usuario');

const SALT_RANDS = 12;

exports.salvar = (req, res) => {
    const { nome, sobrenome, email, senha } = req.body

    bcrypt.hash(senha, SALT_RANDS)
    .then((senhaEncriptada) => {
        let novoUsuario = new Usuario({
            nome,
            sobrenome,
            email,
            senha: senhaEncriptada 
        })
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
    }) 
};
