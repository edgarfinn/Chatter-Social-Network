var commandType = require('./IdentifyCommand/identifyCommand.js');
var userExists = require('./UserExists/userExists.js');

module.exports = function parseUserInput(command) {
  var components = command.split(" ");
  console.log(commandType(components));
}
