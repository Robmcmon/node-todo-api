// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp')

// Update
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5ade70d17eb0a831ea15af1b')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // },{
  //   returnOrginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5ade6375d0d6ba5ea07a6af3')
  }, {
    $set: {
      name: 'Robert'
    },
    $inc: {
      age: 1
    }
  },{
    returnOrginal: false
  }).then((result) => {
    console.log(result);
  });

//  client.close();
});
