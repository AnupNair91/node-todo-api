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

    db.collection('Users').findOneAndUpdate({
        _id : new ObjectID('5c6ff771416db9129cd8e23a')
    }, {
        $set : { name: 'Anup' , location: 'IND' },
        $inc : { age: -1 }
    },{
        returnOriginal : false
    }).then(res => {
        console.log(JSON.stringify(res, undefined, 2));
    }, err => {
        console.log(err);
    });

    client.close();
});