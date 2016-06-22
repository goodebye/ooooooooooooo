var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: String,
  lede: String,
  image: String,
  body: String,
  // contributorId: Schema.Types.ObjectId,
  datePublished:   {type: Date, default: Date.now},
});

var Posts = mongoose.model('Posts', PostSchema);

module.exports = Posts;
