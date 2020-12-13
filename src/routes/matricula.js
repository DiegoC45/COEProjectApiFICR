const express = require('express');
const { createMatricula, update } = require('../controllers/matricula');

module.exports = express.Router() 
                    .post('/', createMatricula)
                    .put('/:id', update);
