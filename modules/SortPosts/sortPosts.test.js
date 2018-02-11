var sortPosts = require('./sortPosts');
var unsortedPosts = require('../../unsortedPostsArray');
var sortedPosts = require('../../sortedPostsArray');


test('posts are returned in order', function() {

  expect(sortPosts(unsortedPosts)).toEqual(sortedPosts);
})
