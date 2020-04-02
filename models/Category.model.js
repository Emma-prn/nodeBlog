var mongoose = require('mongoose');
var shortid = require('shortid');
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
  _id: { 'type': String, 'default': shortid.generate },
  title:  String,
}, {collection: 'Categories'});

var Category = mongoose.model('Category', CategorySchema);
module.exports = Category;