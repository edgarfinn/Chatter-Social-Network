var readTimeline = require('./readTimeline');
var readStore = require('../ReadStore/readStore');
var store = readStore('Test_Utilities/manyUserPosts.js');
var testFilePath = 'Test_Utilities/manyUserPosts.js';

var edgarCommand = [ 'edgar' ];
var johnCommand = [ 'john' ];
var bridgetCommand = [ 'bridget' ];
var edgarPosts = store.users.edgar.posts;
var johnPosts = store.users.john.posts;
var bridgetPosts = store.users.bridget.posts;

test('returns array of users posts', function() {
  expect(readTimeline(edgarCommand,testFilePath)).toEqual(edgarPosts)
  expect(readTimeline(johnCommand,testFilePath)).toEqual(johnPosts)
  expect(readTimeline(bridgetCommand,testFilePath)).toEqual(bridgetPosts)
})
