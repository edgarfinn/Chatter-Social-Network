var postMessage = require('./postMessage');
var readStore = require('../ReadStore/readStore');
var createNewUser = require('../CreateNewUser/createNewUser');
var emptyStore = require('../../Store/backup_dataBase');
var resetTestStore = require('../UpdateStore/resetTestStore');
var fs = require('fs');

describe('new user first post', function() {

  var storeFilePath = 'Store/testDataBase.js';
  var userName = "john", message = "hello chatter world!";
  var commandComponents = ['john','->','hello','chatter','world!'];

  afterEach(function() {
    resetTestStore(emptyStore,storeFilePath, function(err){
      if (err) {
        return console.log(err);
      }
    })
  });

  // creates a new user if user does not exist
  test('creates new user', function(done) {
    function callback() {
      fs.readFile(storeFilePath, 'utf-8', function(err,data) {
        if(err) {
          return console.log('testReadError:',err);
        }
        var updatedStore = JSON.parse(data);
        expect(updatedStore.users.john).toBeDefined();
        done();
      })
    }
    postMessage(commandComponents, storeFilePath, callback);
  })
})

// adds a time stamp
// user's posts array is not empty
// store is not empty
