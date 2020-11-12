const controller = require('../controllers/usuario');

module.exports = (app) => {
    
    app.post('/api/usuarios', controller.salvar);

}