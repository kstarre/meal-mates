let indexController = require("../controllers/indexController");


module.exports = function(app, passport) {
	// HTML routes
	app.get("/", indexController.home),
	app.get("/viewprofile", indexController.isLoggedIn, indexController.viewProfile),
	app.get("/editprofile", indexController.isLoggedIn, indexController.editProfile),

	// API routes
	app.get("/logout", indexController.logout),
	app.post("/signup", passport.authenticate('local-signup', {
		successRedirect: '/editprofile',
		failureRedirect: '/'
	})),
	app.post('/signin', function(req, res, next) {
  		passport.authenticate('local-signin', function(err, user, info) {
    		if (err) { return next(err); }
    		if (!user) { return res.redirect('/'); }
    		req.logIn(user, function(err) {
      			if (err) { return next(err); }
      			return res.redirect('/viewprofile?user_id=' + user.id);
    		});
  		})(req, res, next);
	}),
	app.get("/api/user/:id", indexController.getUserInfo)
};