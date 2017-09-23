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

require('dotenv').config();


// Initialize Express
var PORT = process.env.PORT || 3000;
let app = express();

// Models
let db = require('./models');

// Middleware
//-----------------------------------------------------------------------------------------------------
app.use(express.static('./public'));
app.use(favicon(path.join(__dirname, './public/img', 'favicon.ico')));
app.use(cookieParser());
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
require('./config/passport/passport.js')(passport, db.User);

// Route files
let index = require('./routes/index.js')(app, passport);
let group = require('./routes/group.js')(app);
let invite = require('./routes/invite.js');


//-----------------------------------------------------------------------------------------------------

// Sync sequelize for database
db.sequelize.sync({force:true}).then(function() {
	app.listen(PORT, function() {
		console.log("App is listening on PORT " + PORT);
	});
});

// What are we exporting app for?
module.exports = app;