var readStore = require('../ReadStore/readStore');
var printPosts = require('../PrintPosts/PrintPosts');

module.exports = function(components) {
  var filePath = arguments[1] || 'Store/dataBase.js'
  var store = readStore(filePath);
  var userName = components[0];

  var timeLinePosts = store.users[userName].posts;

  printPosts(timeLinePosts);

  return timeLinePosts;
}
