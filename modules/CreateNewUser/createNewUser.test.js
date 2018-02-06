var createNewUser = require('./createNewUser');

describe('first invocation of createNewUser', function() {
  var userList = {"users": {}};
  var userListCopy = JSON.parse(JSON.stringify(userList));

  // should return a new userList
  test('returns an object', function() {
    expect(typeof(createNewUser("edgar", userList))).toBe("object")
  })

  // the added new userList should have a property of same name as userName arg
  test('new userList has a user proprty matching userName', function() {
    expect(createNewUser("edgar", userList)).toEqual({
      "users": {
        "edgar": {
          "userName": "edgar",
          "posts": [],
          "following": []
        }
      }
    })
  });
  // currentUser list should not be mutated.
  test('createNewUser does not mutate userList', function() {
    expect(userList).toEqual(userListCopy)
  })
});
