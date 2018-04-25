var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://admin:yk77ypq9dsYtBGEEjXrgqeFXPkHKGFSK@ds157599.mlab.com:57599/todo');
// mongoose.connect('mongodb://127.0.0.1:27017/TodoApp');

module.exports = {mongoose};
