var followUser = require('./followUser');
var readStore = require('../ReadStore/readStore');
var emptyStore = require('../../Store/backup_dataBase');
var resetTestStore = require('../UpdateStore/resetTestStore');
var fs = require('fs');

// describe('user follows other users', function() {
//   var storeFilePath = 'Store/testDataBase.js';
//   var follow1Components = [ 'bridget', 'follows', 'edgar' ];
//   var follow2Components = [ 'bridget', 'follows', 'john' ];
//
//   afterAll(function() {
//     resetTestStore(emptyStore,storeFilePath, function(err){
//       if (err) {
//         return console.log(err);
//       }
//     })
//   });
//
//   // creates a new user if user does not exist
//   test('first follow', function(done) {
//     function callback() {
//       fs.readFile(storeFilePath, 'utf-8', function(err, data) {
//         if (err) {
//           return console.log('testReadError:', err);
//         }
//         var updatedStore = JSON.parse(data);
//         var followArray = updatedStore.users.john.following;
//         expect(followArray[0]).toBe('edgar');
//         done();
//       })
//     }
//     followUser(follow1Components, storeFilePath, callback);
//   })
//
//
// })
