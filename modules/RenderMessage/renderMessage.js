var recency = require('../Recency/recency');

module.exports = function(post) {
  var currentDate = new Date();
  var datePosted = new Date(post.datePosted);
  var messageRecency = recency(datePosted,currentDate);
  var renderedMessage = post.contents + " ("+messageRecency+")"
  return renderedMessage;
}
