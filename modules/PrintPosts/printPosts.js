var sortPosts = require('../SortPosts/sortPosts');
var renderMessage = require('../RenderMessage/renderMessage');

module.exports = function(posts) {
  var messages = sortPosts(posts).map(function(post){
    console.log(renderMessage(post));
    return renderMessage(post)
  })
  return messages;
}
