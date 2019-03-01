/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const {ObjectId} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5c78074a412765235c54b900';

// if(!ObjectId.isValid(id)) {
//    return console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos\n', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo\n', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo) return console.log('ID not found.');
//     console.log('Todo by Id\n', todo);
// }).catch((e) => console.log(e))

User.findById(id).then((user) => {
    if(!user) return console.log('ID not found.');
    console.log('User by Id\n', user);
}).catch((e) => console.log(e));