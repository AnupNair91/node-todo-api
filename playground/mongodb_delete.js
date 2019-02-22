/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const { MongoClient, ObjectID } = require('mongodb');

// Connection url
const url = 'mongodb://localhost:27017/TodoApp';
// Database Name
const dbName = 'TodoApp';

MongoClient.connect(url, { useNewUrlParser: true } ,(err, client) => {

    if (err) {
        return console.log('Unable to connect to the server');
    }

    console.log('Connection was successfull.');

    const db = client.db('TodoApp');

    db.collection('Users').findOneAndDelete({
        _id : new ObjectID('5c6eb2bb0035342854514dc5')
    }).then(res => {
        console.log(JSON.stringify(res, undefined, 2));
    }, err => {
        console.log(err);
    });

    client.close();
});