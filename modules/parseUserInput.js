var commandType = require('./IdentifyCommand/identifyCommand.js');
var userExists = require('./UserExists/userExists.js');
var postMessage = require('./PostMessage/postMessage.js');
var createNewUser = require('./CreateNewUser/createNewUser.js');
var readTimeline = require('./ReadTimeline/readTimeline.js');
var followUser = require('./FollowUser/followUser.js');
var readWall = require('./ReadWall/readWall.js');

module.exports = function parseUserInput(command) {
  var components = command.split(" ");

  var instruction = commandType(components);

  var action = {
    "post": postMessage,
    "read": readTimeline,
    "follows": followUser,
    "wall": readWall
  }

  action[instruction](components)

}
