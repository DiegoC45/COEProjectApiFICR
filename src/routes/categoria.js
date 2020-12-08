const express = require('express');
const { listar, buscarPorId } = require('../controllers/categoria');

module.exports = express.Router() 
                    .get('/', listar)
                    .get('/:id', buscarPorId);