const mongoose = require('mongoose');
require('dotenv').config();

mongoose.Promise = global.Promise;
mongoose.connect(process.env[`${process.env.NODE_ENV.toUpperCase()}_DATABASE_URL`], {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}, console.debug('MongoDB conectado'));

module.exports = mongoose;