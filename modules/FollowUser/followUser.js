var updateStore = require('../UpdateStore/updateStore');
var readStore = require('../ReadStore/readStore');

module.exports = function(components) {

  var user = components[0];
  var followed = components[2];
  var filePath = arguments[1] || 'Store/dataBase.js';
  var postCallback = arguments[2] || null;
  var userList = readStore(filePath);

  userList.users[user].following.push(followed);

  updateStore(userList, filePath, function(err) {
    if (err) {
      return console.log('post error', err);
    }

    if (postCallback) {
      postCallback()
    }
  })

  return;
}
