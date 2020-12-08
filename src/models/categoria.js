const mongoose = require('../config/database');

const CategoriaSchema = new mongoose.Schema({
    nome: {
      type: String,
      required: true,
    },
});

module.exports = mongoose.model('Categoria', CategoriaSchema);