const dev = require('./config/webpack.config.dev');
const prod = require('./config/webpack.config.prod');

const enviroment = (process.env.NODE_ENV || 'development').trim();
if (enviroment === 'development') {
  module.exports = dev;
} else {
  module.exports = prod;
}
console.log(prod);