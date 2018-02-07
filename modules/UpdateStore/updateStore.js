var fs = require('fs');

module.exports = function(update, filePath, callback) {
  var data = JSON.stringify(update);

  var writeStream = fs.createWriteStream(filePath);
  writeStream.write(data, 'utf8');
  writeStream.on('finish', function() {
    callback(null);
  });
  writeStream.end();
}
