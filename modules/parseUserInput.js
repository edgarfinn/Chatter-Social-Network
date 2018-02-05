var commandType = require('./IdentifyCommand/identifyCommand.js');

module.exports = function parseUserInput(command) {
  commandType(command);
}
