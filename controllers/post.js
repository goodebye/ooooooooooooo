var Posts = require('../models/posts');

module.exports = function(app) {

  app.get("/post/:title", function(req, res) {
    var postTitle = req.params.title;
    Posts.findOne({title: postTitle}, function(err, post) {
      console.log(post);
      if (err) res.render('error');
      if (!post) res.render('notfound');
      
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(post.body);
      res.end();
    });
  });

}
