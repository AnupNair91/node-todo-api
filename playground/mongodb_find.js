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

    // db.collection('Todos').find({
    //     _id : new ObjectID('5c6d62a87e8536455c6cfc14')
    // }).toArray().then(docs => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, err => {
    //     console.log('Unable to fetch todos', err);
    // });

    // db.collection('Todos').find().count().then( c => {
    //     console.log(`Todos count: ${c}`);
    // }, err => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({
        name : 'Anup Nair'
    }).toArray().then(docs => {
        console.log('Users Found..');
        console.log(JSON.stringify(docs, undefined, 2));
    }, err => {
        console.log('Unable to fetch Users', err);
    });

    client.close();
});