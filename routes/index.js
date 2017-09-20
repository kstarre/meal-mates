let indexController = require("../controllers/indexController");


module.exports = function(app, passport) {
	// HTML routes
	app.get("/", indexController.home),
	app.get("/viewprofile", indexController.viewProfile),
	app.get("/editprofile", indexController.editProfile),
	app.get("/error", indexController.error),
	app.get("/signup", indexController.signup),

	// API routes
	app.post("/signup", passport.authenticate('local-signup', {
		successRedirect: '/editprofile',
		failureRedirect: '/'
	 }));
	app.post('/signin', passport.authenticate('local-signin', {
		successRedirect: '/viewprofile',
		failureRedirect: '/'
	}));
};