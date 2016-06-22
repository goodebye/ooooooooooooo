var path = require('path');
var express = require('express');
var mongoose = require('mongoose');

mongoose.connect('mongodb://admin:password@ds023452.mlab.com:23452/oooooo');

var app = express();

var homeController = require('./controllers/home');
var postController = require('./controllers/post');

var seed = require('./models/seed');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

homeController(app);
postController(app);

app.get('/', function(req, res) {
	res.render('home');
});

app.listen(8080, function() {
	console.log('listening on port 8080.');
})
