const app = require('express')(),
    PORT = process.env.PORT || 8084,
    bodyParser = require('body-parser'),
    routes = require('./routes'),
    cors = require('cors');

// Definição do body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Configuração de rotas
routes(app);

// Configuração do banco de dados
require('./config/database');

app.listen(PORT, () => {
    console.debug(`Perfil: ${process.env.NODE_ENV}`);
    console.debug(`Coe API na porta: ${PORT}`);
});

module.exports = app;