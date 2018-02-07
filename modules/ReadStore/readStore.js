var fs = require('fs');

module.exports = function(callback) {
  return fs.readFileSync('Store/dataBase.js', 'utf-8');
}
