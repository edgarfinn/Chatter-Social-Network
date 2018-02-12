var createNewUser = require('./createNewUser');

describe('first invocation of createNewUser', function() {
  var userList = {"users": {}};
  var userListCopy = JSON.parse(JSON.stringify(userList));

  test('returns an object', function() {
    expect(typeof(createNewUser("edgar", userList))).toBe("object")
  })

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
  test('createNewUser does not mutate userList', function() {
    expect(userList).toEqual(userListCopy)
  })
});
