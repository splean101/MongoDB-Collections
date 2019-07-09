const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'userdb';

MongoClient.connect(url, (err, client) => {
    const db = client.db(dbName);
    db.createCollection("users", (err, collection) => {
        console.log(collection.collectionName);
        db.renameCollection("users", "newUsers", (err, collection) => {
            console.log(collection.collectionName);
        });
    });
});
