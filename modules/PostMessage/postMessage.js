// receives array of command components
var updateStore = require('../UpdateStore/updateStore');
var readStore = require('../ReadStore/readStore');
var createNewUser = require('../CreateNewUser/createNewUser');
var userExists = require('../UserExists/userExists');
var updateStore = require('../UpdateStore/updateStore');

// receives components array arg.
module.exports = function(components) {
  var name = components[0];
  var message = components.slice(2).join(' ');
  var filePath = arguments[1] || 'Store/dataBase.js';
  var postCallback = arguments[2] || null;
  var store = readStore(filePath);

  // create new user if they don't exist
  var userList = userExists(name, store)
    ? store
    : createNewUser(name, store);

  var newPost = {
    postedBy: name,
    contents: message,
    datePosted: new Date()
  }
  // add new post to users posts array
  userList.users[name].posts.push(newPost);

  // update store with new post / user+post
  updateStore(userList, filePath, function(err) {
    if (err) {
      return console.log('post error', err);
    }
    // for asynchronous purposes of testing store updates
    // tests are invoked by this callback, after store has updated
    if (postCallback) {
      postCallback()
    }
  })

  return;
}
