const productPaths = require('./features/productPaths');
const userPaths = require('./features/userPaths');

const paths = {
  ...userPaths,
  ...productPaths,
};

module.exports = paths;
