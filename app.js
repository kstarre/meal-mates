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
let flash = require("connect-flash");
require('dotenv').config();

// Initialize Express
var PORT = process.env.PORT || 3000;
let app = express();

// Models
let db = require('./models');

// Route files
let index = require('./routes/index.js')(app, passport);
let group = require('./routes/group.js')(app);
let invite = require('./routes/invite.js');

// Middleware
//-----------------------------------------------------------------------------------------------------
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('./public'));
app.use(cookieParser);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));

// Override with POST 
app.use(methodOverride("_method"));

// Passport Authentication
app.use(session({
	secret: process.env.SECRET,
	resave: true,
	saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
require('./config/passport/passport.js')(passport, db.user);

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
	console.log('error');
});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

//-----------------------------------------------------------------------------------------------------

// Sync sequelize for database
db.sequelize.sync().then(function() {
	app.listen(PORT, function() {
		console.log("App is listening on PORT " + PORT);
	});
});

// What are we exporting app for?
module.exports = app;