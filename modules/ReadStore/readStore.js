var fs = require('fs');

module.exports = function(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}
