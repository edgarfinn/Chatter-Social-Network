var fs = require('fs');

module.exports = function(storeUpdate,filePath,callback) {
  var newStore = JSON.stringify(storeUpdate)
  fs.writeFile('Store/testDataBase.js', newStore, 'utf8', callback)
}
