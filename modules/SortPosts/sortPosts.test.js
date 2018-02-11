var sortPosts = require('./sortPosts');
var unsortedPosts = require('../../Test_Utilities/unsortedPostsArray');
var sortedPosts = require('../../Test_Utilities/sortedPostsArray');

test('posts are returned in order', function() {

  expect(sortPosts(unsortedPosts)).toEqual(sortedPosts);
})
