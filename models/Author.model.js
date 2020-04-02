var mongoose = require('mongoose');
var shortid = require('shortid');
var Schema = mongoose.Schema;

var AuthorSchema = new Schema({
  _id: { 'type': String, 'default': shortid.generate },
  name:  String,
}, {collection: 'Authors'});

var Author = mongoose.model('Author', AuthorSchema);
module.exports = Author;