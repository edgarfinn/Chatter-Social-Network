var fs = require('fs');
var updateStore = require('./updateStore');
var resetTestStore = require('./resetTestStore');
var backupStore = require('../../Store/backup_dataBase');

/* =================================== */
/* ========= CREATE NEW USER ========= */

describe('updateStore', function() {

  var newStoreData = {
    "users": {
      "edgar": {
        "userName": "edgar",
        "posts": [],
        "following": []
      }
    }
  }
  var newStoreDataCopy = JSON.parse(JSON.stringify(newStoreData))
  var storeFilePath = 'Store/testDataBase.js';

  afterEach(function() {
    resetTestStore(backupStore,storeFilePath, function(err){
      if (err) {
        return console.log(err);
      }
    })
  });

  test('userList is updated', function(done){
    function callback(err) {
      if(err) {
        return console.log('testWriteError:',err)
      }
      fs.readFile(storeFilePath, 'utf-8', function(err,data) {
        if(err) {
          return console.log('testReadError:',err);
        }
        var updatedStore = JSON.parse(data);
        expect(updatedStore).not.toEqual(backupStore);
        done();
      })
    }
    updateStore(newStoreData, storeFilePath,callback);
  })

  test('updates userList as expected', function(done){
    function callback(err) {
      if(err) {
        return console.log('testWriteError:',err)
      }
      fs.readFile(storeFilePath, 'utf-8', function(err,data) {
        if(err) {
          return console.log('testReadError:',err);
        }
        var updatedStore = JSON.parse(data);
        expect(updatedStore).toEqual(newStoreDataCopy);
        done();
      })
    }
    updateStore(newStoreData, storeFilePath,callback);
  })

  test('store.users property is defined', function(done){
    function callback(err) {
      if(err) {
        return console.log('testWriteError:',err)
      }
      fs.readFile(storeFilePath, 'utf-8', function(err,data) {
        if(err) {
          return console.log('testReadError:',err);
        }
        var updatedStore = JSON.parse(data);
        expect(updatedStore.users).toBeDefined();
        done();
      })
    }
    updateStore(newStoreData, storeFilePath,callback);
  })
})

/* ======= END CREATE NEW USER ======= */
/* =================================== */

// adds to a user's posts array when invoked by post

// adds to a user's follows array when invoked by follows

// adds only a string to a user's follows array
