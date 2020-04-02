var mongoose = require('mongoose');
var shortid = require('shortid');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  _id: { type: String, default: shortid.generate },
  title:  String,
  dateCreated: {type: Date, default: Date.now},
  content: String,
  category: {type: String, required: true, ref: 'Category'},
  author: {type: String, required: true, ref: 'Author'},
}, {collection: 'Articles'});

var Article = mongoose.model('Article', ArticleSchema);
module.exports = Article;