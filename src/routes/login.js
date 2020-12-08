const express = require('express');
const { login } = require('../controllers/login');

module.exports = express.Router() 
                    .post('/', login);