const Video = require('../models/video')

exports.searchVideos = (req, res) => {

    const { q } = req.query;
    const where = {}
    if (q) where.nome = new RegExp(q, 'i');

    Video.find(where, (error, videos) => {
        if (error) {
            return res.send(error).status(400)({
                message: 'Nenhum vídeo encontrado.' 
            });
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
