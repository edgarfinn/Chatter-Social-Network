module.exports = function(post) {
  var newPost = JSON.parse(JSON.stringify(post));
  newPost.contents =  newPost.postedBy + " - " + newPost.contents
  return newPost
}
