const loginRoutes = require('./login');
const usuarioRoutes = require('./usuario');
const categoriaRoutes = require('./categoria');

module.exports = (app) => {
    app.use('/api/login', loginRoutes);
    app.use('/api/usuarios', usuarioRoutes);
    app.use('/api/categorias', categoriaRoutes);

}