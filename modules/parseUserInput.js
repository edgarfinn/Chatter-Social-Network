var commandType = require('./IdentifyCommand/identifyCommand.js');
var userExists = require('./UserExists/userExists.js');
var userList = require('../Store/dataBase.js');
var postMessage = require('./PostMessage/postMessage.js');
var createNewUser = require('./CreateNewUser/createNewUser.js');
var readPosts = require('./ReadPosts/readPosts.js');
var followUser = require('./FollowUser/followUser.js');
var readWall = require('./ReadWall/readWall.js');

module.exports = function parseUserInput(command) {
  var components = command.split(" ");

  var instruction = commandType(components);

  var action = {
    "post": postMessage,
    "read": readPosts,
    "follows": followUser,
    "wall": readWall
  }

  action[instruction](components)


  // console.log('users after post:',oldUsers);

}
