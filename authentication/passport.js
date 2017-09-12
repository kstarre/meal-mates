// Passport Authentication
const passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy;

const express = require('express');
const session = require('express-session');
const expressValidator = require('express-validator');
const flash = require('connect-flash');
const bcrypt = require('bcryptjs');
let salt = bcrypt.genSaltSync(10);

const db = require('../models');

// Authentication Middleware
module.export = function(app) {

	// Initializes the Express Sessions
	app.use(session({
		secret: 'secret',
		saveUninitialized: true,
		resave: true
	}));

	// Initialize Passport
	app.use(passport.initialize());
	app.use(passport.session());

	// Connect Flash
	app.use(flash());

	// Express Validator
	app.use(expressValidator({
		errorFormatter: function(param, msg, value)
		{
			var namespace = param.split('.'),
			root = namespace.shift(),
			formParam = root;

			while(namespace.length) {
				formParam += '[' + namespace.shift() + ']';
			}
			return {
				param 	: formParam,
				msg 	: msg, 
				value	: value
			};
		}
	}));

	// Authentication Strategy
	passport.use(new LocalStrategy(
		function(email, password, done) {
			console.log('------------LOGIN----------------')

			db.User.findOne({where: { eamil: email}})
				.then(function(user) {

					// if user could not be found
					if(!user) {
						return done(null, false, { message: 'Incorrect email or password.'});
					}

					// if login attempt is successful
					return done(null, user);
				}).catch(err => {

					console.log(err, " ...");
					if (err) {
						done(null, false, {message: 'Unknown User'})
					}
				});
		}
	));

	// Session Management
	passport.serializeUser(function(user, done) {
		done(null, user.id);
	});

	passport.deserializeUser(function(id, done) {
		db.User.findById(id).then(function(user) {
			done(null, user);
		}).catch(function(err) {
			done(err, null)
		});
	});

}