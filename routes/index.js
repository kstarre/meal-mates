let indexController = require("../controllers/indexController");

module.exports = function(app, passport) {
	// HTML routes
	app.get("/", indexController.home),
  app.get("/welcome", indexController.isLoggedIn, indexController.welcome),
	app.get("/viewprofile", indexController.isLoggedIn, indexController.viewProfile),
	app.get("/editprofile", indexController.isLoggedIn, indexController.editProfile),

	// API routes
	app.get("/logout", indexController.logout),
	app.post("/signup", passport.authenticate('local-signup', {
    successRedirect: '/welcome',
    failureRedirect: '/'
  })),
	app.post('/signin', passport.authenticate('local-signin'), function(req, res) {
    if (req.query.token) {
      //var url = "/group/join/" + req.query.groupId + "/" + req.query.token;
      res.redirect("/welcome");
    }
    else {
      res.redirect("/viewprofile");
    }
  }),

  app.get("/api/user", indexController.getUserInfo),
  app.put("/api/user/edit", indexController.updateUserInfo),
  app.delete("/api/user/delete", indexController.deleteUser)
};