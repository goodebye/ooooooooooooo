var Posts = require('../models/posts.js');

module.exports = function(app) {
  app.get('/', function(req, res) {
    Posts.find({}, function(err, posts) {
      if (!err) {
        res.render('home', {
          posts: posts
        });
      }
    })
  });
}
