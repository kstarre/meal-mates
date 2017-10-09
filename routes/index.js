let indexController = require("../controllers/indexController");

module.exports = function(app, passport) {
	// HTML routes
	app.get("/", indexController.home),
  	app.get("/welcome", indexController.isLoggedIn, indexController.welcome),
	app.get("/viewprofile", indexController.isLoggedIn, indexController.viewProfile),
	app.get("/editprofile", indexController.isLoggedIn, indexController.editProfile),
  	app.get("/viewprofile/:groupId/:userId", indexController.isLoggedIn, indexController.viewOtherProfile),

	// API routes
	app.get("/logout", indexController.logout),
	app.post("/signup", passport.authenticate('local-signup'), indexController.signup),
	app.post('/signin', passport.authenticate('local-signin'), indexController.signin),
  	app.get("/api/user", indexController.getUserInfo),
  	app.put("/api/user/edit", indexController.updateUserInfo),
  	app.delete("/api/user/delete", indexController.deleteUser),
  	app.get("/api/user/:userId", indexController.getOtherUser),
  	app.post("/api/user/imageupload", indexController.uploadImage)

};

