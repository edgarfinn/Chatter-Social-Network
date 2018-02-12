var updateStore = require('../UpdateStore/updateStore');
var readStore = require('../ReadStore/readStore');
var createNewUser = require('../CreateNewUser/createNewUser');
var userExists = require('../UserExists/userExists');
var updateStore = require('../UpdateStore/updateStore');

module.exports = function(components) {
  var name = components[0];
  var message = components.slice(2).join(' ');
  var filePath = arguments[1] || 'Store/dataBase.js';
  var postCallback = arguments[2] || null;
  var store = readStore(filePath);

  var userList = userExists(name, store)
    ? store
    : createNewUser(name, store);

  var newPost = {
    postedBy: name,
    contents: message,
    datePosted: new Date()
  }

  userList.users[name].posts.push(newPost);

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
