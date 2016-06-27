var path = require('path');
var express = require('express');
var expressSession = require('express-session');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var passportLocal = require('passport-local');

//templating
var exphbs = require('express-handlebars');
var hbHelpers = require('./lib/helpers.js');

//mongo
var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:password@ds023452.mlab.com:23452/oooooo');

var app = express();

// templating middleware
var hbs = exphbs.create({
    defaultLayout: 'main',
    helpers: hbHelpers
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSession({ secret: 'asdf' }));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new passportLocal.Strategy(function(username, password, done) {
    
}));;

//controllers
var homeController = require('./controllers/home');
var postController = require('./controllers/post');

//var seed = require('./models/seed');

app.use(express.static(path.join(__dirname, 'public')));

homeController(app);
postController(app);

app.get('/', function(req, res) {
	res.render('home');
});

app.get('/about', function(req, res) {
    res.render('about');
});

app.get('/register', function(req, res) {
    res.render('register');
});

app.get('/login', function(req, res) {
    res.render('login');
});

app.post('login', passport.authenticate('local'), function(req, res) {
        
});

app.listen(8080, function() {
	console.log('listening on port 8080.');
});
