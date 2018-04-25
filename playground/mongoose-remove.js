const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')

//Todo.remove
// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '5ae0cb98c306fa0014681278'}).then((todo) => {
  console.log(todo);
});

Todo.findByIdAndRemove('5ae0cb98c306fa0014681278').then((todo) => {
  console.log(todo);
});
