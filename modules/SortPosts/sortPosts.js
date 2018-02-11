module.exports = function(posts) {

  var sortedByDate = posts.slice(0).sort(function(postA, postB) {
    return postA.datePosted < postB.datePosted
  });
  
  return sortedByDate
}
