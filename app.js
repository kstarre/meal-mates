// Dependencies
let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let session = require('express-session');
require('dotenv').config();

// Route files
let index = require('./routes/index.js');
let login = require('./routes/login.js');
let logout = require('./routes/logout.js');
let signup = require('./routes/signup.js');
let group = require('./routes/group.js');
let user = require('./routes/user.js');
let invite = require('./routes/invite.js');

// Models
let db = require('./models');

// Initialize Express
var PORT = process.env.NODE_ENV || 3000;
let app = express();

// View engine setup



// Authentication
//let authentication = require('./authentication/passport')(app);
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
db.sequelize.sync({ force: true }// will reset db each time app begins
	).then(function() {
		app.listen(PORT, function() {
			console.log("Listening on port " + PORT);
	});
});

module.exports = app;