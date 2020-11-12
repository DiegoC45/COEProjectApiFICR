const app = require('express')();
const PORT = process.env.PORT || 8084;

app.listen(PORT, () => {
    console.debug(`Perfil: ${process.env.NODE_ENV}`);
    console.debug(`Coe API na porta: ${PORT}`);
});

module.exports = app;