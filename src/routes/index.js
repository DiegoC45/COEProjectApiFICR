const loginRoutes = require('./login');
const usuarioRoutes = require('./usuario');
const categoriaRoutes = require('./categoria');
const cursosRoutes = require('./curso');
const videosRoutes = require('./video');
const matriculaRoutes = require('./matricula');

module.exports = (app) => {
    app.use('/api/login', loginRoutes);
    app.use('/api/usuarios', usuarioRoutes);
    app.use('/api/categorias', categoriaRoutes);
    app.use('/api/cursos', cursosRoutes);
    app.use('/api/videos', videosRoutes);
    app.use('/api/matricula', matriculaRoutes);
}