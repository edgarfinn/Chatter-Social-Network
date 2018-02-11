var renderMessage = require('./renderMessage');
var readStore = require('../ReadStore/readStore');
var store = readStore('Test_Utilities/manyUserPosts.js');
var recency = require('../Recency/recency');
var edgarPosts = store.users.edgar.posts;

test('returns a rendered message as expected', function() {
  expect(renderMessage(edgarPosts[0])).toMatch(/Wow what a week/)
})

test('mentions recency', function() {
  expect(renderMessage(edgarPosts[0])).toMatch(/ago/)
})

test('mentions a number', function() {
  expect(renderMessage(edgarPosts[0])).toMatch(/[0-9]/)
})
