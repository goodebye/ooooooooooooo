var path = require('path');
var express = require('express');
var mongoose = require('mongoose');
var exphbs = require('express-handlebars');

mongoose.connect('mongodb://admin:password@ds023452.mlab.com:23452/oooooo');

var app = express();

var homeController = require('./controllers/home');
var postController = require('./controllers/post');

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));

homeController(app);
postController(app);

app.get('/', function(req, res) {
	res.render('home');
});

app.listen(8080, function() {
	console.log('listening on port 8080.');
})
