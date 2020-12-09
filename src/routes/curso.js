const express = require('express');
const { listar, buscarPorId } = require('../controllers/curso');
const { getVideosByCurso } = require('../controllers/video');

module.exports = express.Router() 
                    .get('/', listar)
                    .get('/:id', buscarPorId)
                    .get('/:id/aulas', getVideosByCurso);