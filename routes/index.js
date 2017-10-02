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
	app.post('/signin', passport.authenticate('local-signin', {
    successRedirect: '/viewprofile',
    failureRedirect: '/'
  })),

  app.get("/api/user", indexController.getUserInfo),
  app.put("/api/user/edit", indexController.updateUserInfo),
  app.delete("/api/user/delete", indexController.deleteUser),

  // sign in and sign up routes for invitations
  app.post("/signup/invite", passport.authenticate('local-signup', {
    successRedirect: '/group/join/:groupId',
    failureRedirect: '/group/invite/:groupId/:inviteCode'
  })),
  app.post('/signin/invite', passport.authenticate('local-signin', {
    successRedirect: '/group/join/:groupId',
    failureRedirect: '/group/invite/:groupId/:inviteCode'
  })),
};