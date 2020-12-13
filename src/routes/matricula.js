const express = require('express');
const { createMatricula } = require('../controllers/matricula');

module.exports = express.Router() 
                    .post('/', createMatricula); 