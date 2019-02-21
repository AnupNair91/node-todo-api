/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const { MongoClient, ObjectID } = require('mongodb');

// Connection url
const url = 'mongodb://localhost:27017/TodoApp';
// Database Name
const dbName = 'TodoApp';

MongoClient.connect(url , { useNewUrlParser: true } , (err, client) => {

    if (err) {
        return console.log('Unable to connect to the server');
    }

    console.log('Connection was successfull.');

    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: "something to do",
    //     completed: false
    // }, (err , res) => {
    //     if (err) {
    //        return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(res.ops, undefined, 2));
    // });

    db.collection('Users').insertOne({
        name: "Anup Nair",
        age: 27,
        location: "Malaysia"
    }, (err , res) => {
        if (err) {
           return console.log('Unable to insert user', err);
        }
        console.log(JSON.stringify(res.ops, undefined, 2));
    });

    client.close();
});