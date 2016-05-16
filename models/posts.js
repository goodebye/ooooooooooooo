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

// var testPost = new Posts({
//   title: "title",
//   lede: "this is a bit of detials about the post!",
//   image: "http://loremflickr.com/800/200",
//   body: "<html><head></head><body><h1>this is the post</h1></body></html>"
// });
//
// console.log("hello from inside posts!");
// console.log(testPost.id);
//
// testPost.save(function (err, data) {
//   console.log("saving!!!")
//   if (err) {
//     console.log(err);
//   }
//   else console.log('Saved ', data);
// });

module.exports = Posts;
