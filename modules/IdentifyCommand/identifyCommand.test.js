var identifyCommand = require('./identifyCommand.js');

describe('user enters single word', function() {
  test('returns read when command.length is 1', function() {
    expect(identifyCommand(['edgar'])).toBe("read")
  })
})

describe('instruction is "->"', function() {
  var command = [ 'edgar', '->', 'wow', 'what', 'a', 'week!!!' ];
  test('returns "post" when " ->" follows username', function() {
    expect(identifyCommand(command)).toBe("post")
  })
})

describe('instruction is "follows"', function() {
  var command = ['bridget', 'follows', 'damian'];
  test('returns "follows"', function() {
    expect(identifyCommand(command)).toBe("follows")
  })
})

describe('instruction is "wall"', function() {
  var command = ['bridget', 'wall'];
  test('returns "wall"', function() {
    expect(identifyCommand(command)).toBe("wall")
  })
})
