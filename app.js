const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'userdb';

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) =>{
    const db = client.db(dbName);
    console.log(db);
    client.close();
    
})