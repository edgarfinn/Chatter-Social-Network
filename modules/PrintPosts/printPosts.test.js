var printPosts = require('./printPosts');
var sortPosts = require('../SortPosts/sortPosts');

var bridgetPosts = [
  {
    "postedBy": "bridget",
    "contents": "I've got a spare ticket for the theatre tonight...",
    "datePosted": "2018-02-11T12:42:30.754Z"
  }, {
    "postedBy": "bridget",
    "contents": "...any takers",
    "datePosted": "2018-02-11T12:43:41.076Z"
  }
]

describe('readTimeline invocation', function() {
  var expected = [
    expect.stringMatching(/I've got a spare ticket for the theatre tonight/),
    expect.stringMatching(/...any takers??/),
  ]
  test('returns an array of messages', function() {
    expect(printPosts(bridgetPosts)).toEqual(
      expect.arrayContaining(expected)
    )
  })
})
