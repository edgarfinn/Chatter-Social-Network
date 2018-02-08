var postMessage = require('./postMessage');
var readStore = require('../ReadStore/readStore');
var createNewUser = require('../CreateNewUser/createNewUser');
var emptyStore = require('../../Store/backup_dataBase');
var resetTestStore = require('../UpdateStore/resetTestStore');
var fs = require('fs');

describe('new user first post', function() {


  var storeFilePath = 'Store/testDataBase.js';
  var command1Components = ['john', '->', 'hello', 'chatter', 'world!'];
  var command2Components = ['john', '->', 'cant', 'believe','I','lost','my','keys', 'again!'];
  var command3Components = ['edgar', '->', 'Wow', 'what', 'a', 'week!'];

  afterAll(function() {
    resetTestStore(emptyStore,storeFilePath, function(err){
      if (err) {
        return console.log(err);
      }
    })
  });

  // creates a new user if user does not exist
  test('creates new user', function(done) {
    function callback() {
      fs.readFile(storeFilePath, 'utf-8', function(err, data) {
        if (err) {
          return console.log('testReadError:', err);
        }
        var updatedStore = JSON.parse(data);
        var firstPost = updatedStore.users.john.posts[0];
        expect(updatedStore.users.john).toBeDefined();
        expect(firstPost).toHaveProperty('postedBy', 'john');
        expect(firstPost).toHaveProperty('contents', 'hello chatter world!');
        expect(firstPost).toHaveProperty('datePosted');
        done();
      })
    }
    postMessage(command1Components, storeFilePath, callback);
  })
  test('return user posts second message', function(done) {
    function callback() {
      fs.readFile(storeFilePath, 'utf-8', function(err, data) {
        if (err) {
          return console.log('testReadError:', err);
        }
        var updatedStore = JSON.parse(data);
        expect(updatedStore.users.john.posts.length).toBe(2);
        done();
      })
    }
    postMessage(command2Components, storeFilePath, callback);
  })

  test('new user has all expected properies', function(done) {
    function callback() {
      fs.readFile(storeFilePath, 'utf-8', function(err, data) {
        if (err) {
          return console.log('testReadError:', err);
        }
        var updatedStore = JSON.parse(data);
        expect(updatedStore.users.john).toHaveProperty('userName');
        expect(updatedStore.users.john).toHaveProperty('posts');
        expect(updatedStore.users.john).toHaveProperty('following');
        done();
      })
    }
    postMessage(command3Components, storeFilePath, callback);
  })

})
