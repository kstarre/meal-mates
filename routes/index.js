let indexController = require("../controllers/indexController");


module.exports = function(app, passport) {
	// HTML routes
	app.get("/", indexController.home),
	app.get("/viewprofile", indexController.isLoggedIn, indexController.viewProfile),
	app.get("/editprofile", indexController.isLoggedIn, indexController.editProfile),

	// API routes
	app.get("/logout", indexController.logout),
	app.post("/signup", function(req, res, next) {
  		passport.authenticate('local-signup', function(err, user, info) {
    		if (err) { return next(err); }
    		if (!user) { return res.redirect('/'); }
    		req.logIn(user, function(err) {
      			if (err) { return next(err); }
      			return res.redirect('/editprofile?user_id=' + user.id);
    		});
  		})(req, res, next);
	}),
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

  // do we need isLoggedIn for API routes?
	app.get("/api/user", indexController.isLoggedIn, indexController.getPassportInfo),
  app.get("/api/user/:id", indexController.getUserInfo),
  app.put("/api/user/edit", indexController.updateUserInfo),
  app.delete("/api/user/delete", indexController.deleteUser)
};