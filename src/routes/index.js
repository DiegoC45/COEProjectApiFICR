const usuarioController = require('../controllers/usuario');
const loginController = require('../controllers/login');
const categoriaController = require('../controllers/categoria');

module.exports = (app) => {
    app.post('/api/usuarios', usuarioController.salvar);
    app.post('/api/login', loginController.login);
    app.get('/api/categorias', categoriaController.listar);
    app.get('/api/categorias/:id', categoriaController.buscarPorId);

}