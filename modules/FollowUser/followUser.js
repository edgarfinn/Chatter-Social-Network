var updateStore = require('../UpdateStore/updateStore');
var readStore = require('../ReadStore/readStore');

// receives components array as arg.
module.exports = function(components) {
  console.log('following User', components)

  var user = components[0];
  var followed = components[2];
  var filePath = arguments[1] || 'Store/dataBase.js';
  var postCallback = arguments[2] || null;
  var userList = readStore(filePath);

  // add new follow to user's following array
  console.log('userList',userList);
  userList.users[user].following.push(followed);

  // updateStore with user's new follow
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
