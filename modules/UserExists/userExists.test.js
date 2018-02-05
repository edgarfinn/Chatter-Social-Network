var userExists = require('./userExists');

describe.only('userExists function', function() {
  var userList = {
    "users": {
      "edgar": {
        "userName": "edgar",
        "posts": [
          {
            "postedBy": "edgar",
            "contents": "Wow, what an exciting week!",
            "datePosted": "2018-02-01T13:54:30.586Z"
          }, {
            "postedBy": "edgar",
            "contents": "We should do this more often!",
            "datePosted": "2018-02-01T13:55:31.170Z"
          }
        ],
        "following": []
      }
    }
  };

  test('returns false for new user', function() {
    expect(userExists('elizabeth',userList)).toBe(false);
  })

  test('returns false for new user', function() {
    expect(userExists('edgar',userList)).toBe(true);
  })

})
