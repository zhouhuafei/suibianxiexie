// mongodb
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const url = 'mongodb://localhost:27017/suibianxiexie';
const mongodbConnect = MongoClient.connect(url).catch(function (error) {
    console.log('connected incorrectly to server');
    // console.log('Connected incorrectly to server:\n', error);
}).then(function (db) {
    if (db) {
        console.log('connected correctly to server');
        // console.log('Connected correctly to server:\n', db);
    }
    return db;
});

module.exports = mongodbConnect;
