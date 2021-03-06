var app = require('vorpal')();
var parseUserInput = require('./modules/parseUserInput.js');

app
  .mode('sign in')
  .description('Begins interactive Chatter session')
  .delimiter('$: ')
  .action(function(command, callback) {
    parseUserInput(command)
    callback();
  });

app
  .delimiter('Chatter')
  .show();
