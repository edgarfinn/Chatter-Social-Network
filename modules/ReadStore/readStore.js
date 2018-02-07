var fs = require('fs');

module.exports = function(filePath) {
  return fs.readFileSync(file, 'utf-8');
}
