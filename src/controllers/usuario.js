const bcrypt = require('bcrypt');
const Usuario = require('../models/usuario');

const SALT_RANDS = 12;

function tratarErro (error) {
    const response = {
        message: 'Ocorreu um erro. Contate o suporte para mais informações.'
    }

    if (error.code == 11000 && error.keyPattern.email) {
        response.message = 'Email já cadastrado no sistema.'
    }

    return response;
}

exports.salvar = (req, res) => {
    const { nome, sobrenome, email, senha } = req.body

    if (nome && sobrenome && email && senha) {
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
                    return res.status(422).send(tratarErro(error));
                }
                
                const response = {
                    message: 'Usuário registrado com sucesso.',
                    data: usuario
                }
                res.status(201).json(response)
            })
        })
    } else {

        return res.status(422).send({
            message: 'São campos obrigatórios: Nome, sobrenome, email e senha.'
        })
    }
};
