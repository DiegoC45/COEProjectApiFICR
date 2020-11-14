const usuarioController = require('../controllers/usuario');
const loginController = require('../controllers/login');

module.exports = (app) => {
    
    app.post('/api/usuarios', usuarioController.salvar);
    app.post('/api/login', loginController.login);

}