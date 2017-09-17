// Dependencies
let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let session = require('express-session');
let methodOverride = require('method-override');
let passport = require('passport');
let moment = require('moment');
// see if you're using it below
//let flash = require("connect-flash");
require('dotenv').config();

// Route files
let index = require('./routes/index.js');
let group = require('./routes/group.js');
let invite = require('./routes/invite.js');


// Models
let db = require('./models');

// Initialize Express
var PORT = process.env.PORT || 3000;
let app = express();

//view engine
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public'),{index:false,extensions:['html']}));
app.use(bodyParser.urlencoded({ extended: false }));


// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));


// Passport Authentication
app.use(session({
	secret: process.env.SECRET,
	resave: true,
	saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport/passport.js')(passport, db.user);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// Global variables



// Middleware


// Routing
/*app.use('/', index);
app.use('/login', login);
app.use('/logout', logout);
app.use('/signup', signup);
app.use('/group/:id', group);
app.use('/user/:id', user);
app.use('/invite/group/:id/user/:id', invite);*/


// Catch 404 and forward to error handler
app.use(function(req, res, next) {
	let err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// Error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render to the error page
	res.status(err.status || 500);
	res.render('error');
});


// Sync sequelize for database
db.sequelize.sync().then(function() {
	app.listen(PORT, function() {
		console.log("App is listening on PORT " + PORT);
	});
});

// What are we exporting app for?
module.exports = app;