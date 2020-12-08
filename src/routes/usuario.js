const express = require('express');
const { salvar } = require('../controllers/usuario');

module.exports = express.Router() 
                    .post('/', salvar);