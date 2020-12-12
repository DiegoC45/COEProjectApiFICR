const express = require('express');
const videosController = require('../controllers/video') 

module.exports = express.Router()
                    .get('/', videosController.searchVideos);
