var mongoose       = require('mongoose');

var schema = new mongoose.Schema({subject: 'string'});

module.exports = mongoose.model('Todo', schema);