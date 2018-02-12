var prefixUsername = require('../PrefixUsername/prefixUsername');
var readStore = require('../ReadStore/readStore');
var printPosts = require('../PrintPosts/PrintPosts');

module.exports = function(components) {
  var filePath = arguments[1] || 'Store/dataBase.js';
  var userName = components[0];
  var store = readStore(filePath);

  var profile = store.users[userName];
  var userPosts = profile.posts;
  var followedPosts = [];

  profile.following.map(function(followed){
    return store.users[followed].posts.map(function(post) {
      followedPosts.push(post)
    })
  })

  var wallPosts = userPosts.concat(followedPosts).map(function(post) {
    return prefixUsername(post)
  });
  printPosts(wallPosts);
  return wallPosts;
}
