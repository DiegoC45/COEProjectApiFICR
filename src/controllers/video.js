const Video = require('../models/video')

exports.searchVideos = (req, res) => {

    Video.find({ nome: req.query.text }, (error, videos) => {
        if (error) {
            return res.send(error).status(400);
        }

        res.send(videos).status(200);
    })
}

exports.getVideosByCurso = (req, res) => {

    Video.find({ curso: req.params.id },
        (error, videos) => {
            if (error) {
                return res.send(error).status(400);
            }

            res.send(videos).status(200);
        }
    )
}
