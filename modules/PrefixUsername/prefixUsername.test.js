var prefixUsername = require('./prefixUsername');


describe('prefixUsername',function() {
  var post = {
    "postedBy": "john",
    "contents": "cant believe I forgot my keys again!!! :(",
    "datePosted": "2018-02-11T12:37:10.644Z"
  }
  test('adds a userName to start of post contents', function() {
    expect(prefixUsername(post).contents).toMatch(/john - /)
    expect(prefixUsername(post).contents.split(" - ")[0]).toBe("john")
    expect(prefixUsername(post).contents.split(" - ")[1]).toBe(
      "cant believe I forgot my keys again!!! :("
    )
  })
})
