var readWall = require('./readWall');
var readStore = require('../ReadStore/readStore');
var store = readStore('Test_Utilities/manyUsersFollowing.js');
var testFilePath = 'Test_Utilities/manyUsersFollowing.js';

var edgarWall = ['edgar', 'wall'];

var edgarWallPosts = [
  {
    "postedBy": "edgar",
    "contents": "edgar - oh what a beautiful mooooorniiiiing",
    "datePosted": "2018-02-11T20:15:40.908Z"
  }, {
    "postedBy": "edgar",
    "contents": "edgar - Wow! eight hour's sleep really makes a difference :D",
    "datePosted": "2018-02-11T20:16:16.884Z"
  }, {
    "postedBy": "edgar",
    "contents": "edgar - I dont even need a coffee",
    "datePosted": "2018-02-11T20:16:54.470Z"
  }, {
    "postedBy": "john",
    "contents": "john - ohhh looking fwd to the game tonight!",
    "datePosted": "2018-02-11T20:15:55.795Z"
  }, {
    "postedBy": "john",
    "contents": "john - Anyone want to join me at the Nags Head to watch it later?",
    "datePosted": "2018-02-11T20:17:20.527Z"
  }, {
    "postedBy": "sam",
    "contents": "sam - Ohh another day another dollar, as they say ;)",
    "datePosted": "2018-02-11T20:19:17.586Z"
  }
]

test('readWall returns all posts by user followed', function() {
  expect(readWall(edgarWall, testFilePath)).toEqual(
    expect.arrayContaining(edgarWallPosts)
  )
})
