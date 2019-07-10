const MongoClient = require('mongodb').MongoClient;

MongoClient.connect(
    'mongodb://localhost:27017',
    { useNewUrlParser: true },
    (err, client) => {
        const db = client.db('userdb');
        db.createCollection("collection1", (err, collection) => {
            if (err) console.log('collection1 NOT DONE --> ');
            console.log(collection.collectionName);
        });
        db.createCollection("collection2", (err, collection) => {
            if (err) console.log('collection2 NOT DONE --> ' + err);
            console.log(collection.collectionName);
        });
        db.renameCollection('collection1', 'collection2 ', (err, collection) => {
            if (err) {
                console.log('collection1 --> collection2 NOT DONE --> ' + err);
                db.renameCollection('collection2', 'tmpCollection2 ', (err, collection) => {
                    if (err) {
                        console.log('tmpCollection2 NOT DONE --> ' + err);
                    } else {
                        db.renameCollection('collection1', 'collection2 ', (err, collection) => {
                            console.log(`tmpCollection2 is DONE, collection name --> ${collection.collectionName}`);
                        });
                    };
                    console.log('collection2 renamed to tmpCollection2');
                });
            } else {
                console.log('collection1 renamed to collection2');
                console.log(collection.collectionName);
            };
        });
    });
    