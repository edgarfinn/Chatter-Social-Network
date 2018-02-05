var app = require('vorpal')();

function parseUserInput(command) {
  console.log('parsing command:',command);
}

app
  .mode('login')
  .description('Begins interactive Chatter session')
  .delimiter('$: ')
  .action(function(command, callback) {
    parseUserInput(command)
    callback();
  });

app
  .delimiter('Chatter')
  .show();
