let indexController = require("../controllers/indexController");


module.exports = function(app, passport) {
	// HTML routes
	app.get("/", indexController.home),
	app.get("/viewprofile", indexController.viewProfile),
	app.get("/editprofile", indexController.editProfile),

	// API routes
	app.post("/signup", passport.authenticate('local-signup', {
		successRedirect: '/editprofile',
		failureRedirect: '/',
		failureFlash: true
	 }));
	app.post('/signin', passport.authenticate('local-signin', {
		successRedirect: '/viewprofile',
		failureRedirect: '/',
		failureFlash: true
	}));
};