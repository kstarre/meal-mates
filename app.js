// Dependencies
let express = require('express');

// Route files
let index = require('./routes/index');
let login = require('./routes/login');
let logout = require('./routes/logout');
let signup = require('./routes/signup');
let group = require('./routes/group');
let user = require('./routes/user');
let invite = require('routes/invite');

// Models
let db = require('./models');

// Initialize Express
let app = express();

// View engine setup


// Authentication



// Global variables



// Middleware



// Routing
app.use('/', index);
app.use('/login', login);
app.use('/logout', logout);
app.use('/signup', signup);
app.use('/group/:id', group);
app.use('/user/:id', user);
app.use('/invite/group/:id/user/:id', invite);


// Catch 404 and forward to error handler
app.use(function(req, res, next) {
	let err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// Eror handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render to the error page
	res.status(err.status || 500);
	res.render('error');
});


// Sync sequelize for database
db.sequelize.sync(
	{ force: true }// will reset db each time app begins
);

module.exports = app;