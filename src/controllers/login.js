const bcrypt = require('bcrypt');
const Usuario = require('../models/usuario');

exports.login = (req, res) => {

    const { email, senha } = req.body;

    if (email && senha) {
        const errResponse = {
            message: 'Usuário ou senha inválidos.'
        }
    
        Usuario.findOne({ email },
        (error, usuario) => {
            if(!usuario) {
                return res.status(403).send(errResponse);
            }
    
            bcrypt.compare(senha, usuario.senha, (err, same) => {
                if (same) {
                  return res.status(200).send({ 
                    message: 'Login feito com sucesso.',
                    data: usuario
                   });
                }
    
                res.status(403).send(errResponse);
            })
        })
    } else {
        return res.status(422).send({
            message: 'São campos obrigatórios: Email e senha.'
        })
    }
}
