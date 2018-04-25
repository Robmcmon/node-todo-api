var mongoose = require('mongoose');
var config = require('./../db/config');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || mlabUser);
// mongoose.connect('mongodb://127.0.0.1:27017/TodoApp');

module.exports = {mongoose};
