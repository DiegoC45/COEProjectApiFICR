module.exports = function (app) {
    const matricula = require('../controllers/matricula')
    app.route('/matricula')

    .post(matricula.createMatricula)  

}