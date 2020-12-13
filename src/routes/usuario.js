const express = require('express');
const { salvar } = require('../controllers/usuario');
const { getMatriculasByUsuario } = require('../controllers/matricula');

module.exports = express.Router() 
                    .post('/', salvar)
                    .get('/:id/matriculas', getMatriculasByUsuario);