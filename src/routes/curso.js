const express = require('express');
const { listar, buscarPorId } = require('../controllers/curso');

module.exports = express.Router() 
                    .get('/', listar)
                    .get('/:id', buscarPorId);