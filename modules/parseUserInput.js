var commandType = require('./IdentifyCommand/identifyCommand.js');
var userExists = require('./UserExists/userExists.js');
var userList = require('../Store/dataBase.js');
var postMessage = require('./PostMessage/postMessage.js');

module.exports = function parseUserInput(command) {
  var components = command.split(" ");

  var instruction = commandType(components);

  var action = {
    "post": postMessage
  }

  action[instruction](components)


  // console.log('users after post:',oldUsers);

}
