const app = require('express')(),
    PORT = process.env.PORT || 8084,
    bodyParser = require('body-parser'),
    routes = require('./src/routes');

// Definição do body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configuração de rotas
routes(app);

// Configuração do banco de dados
require('./src/config/database');

app.listen(PORT, () => {
    console.debug(`Perfil: ${process.env.NODE_ENV}`);
    console.debug(`Coe API na porta: ${PORT}`);
});

module.exports = app;