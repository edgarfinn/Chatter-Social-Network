var identifyCommand = require('./identifyCommand.js');

describe('user enters post command', function() {
  var command = "edgar -> Wow what a week!";

  test('returns "post" when " ->" follows username', function() {
    expect(identifyCommand(command)).toBe("post")
  })
  
})


// should return either "post", "read", "follow" or "wall"
// should return "read" if command length is 1
// should return "post" if command's first word is followed by "->"
// should return "follow" if command's second word is "follows"
// should return "wall" if command's second word is "wall"

// should not mutate arguments
