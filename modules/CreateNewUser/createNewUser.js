module.exports = function(userName, currentUserList) {
  var newUserList = JSON.parse(JSON.stringify(currentUserList));

  var user = {
    userName: userName,
    posts: [],
    following: []
  }

  newUserList.users[userName] = user;

  return newUserList;
}
