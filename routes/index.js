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
	app.post("/signup", passport.authenticate('local-signup'), function(req, res) {
    if( req.session.invite_inviteCode ){


      if( req.xhr ){
        res.json({ successRedirect: '/group/join/' });
      }
      else{
        res.redirect('/group/join/');
      }

    }
    else {
      res.redirect('/welcome');
    }
  }),
	app.post('/signin', passport.authenticate('local-signin'), function(req, res) {
    if( req.session.invite_inviteCode ){


      if( req.xhr ){
        res.json({ successRedirect: '/group/join/' });
      }
      else{
        res.redirect('/group/join/');
      }

    }
    else {
      res.redirect('/viewprofile');
    }

  }),

  app.get("/api/user", indexController.getUserInfo),
  app.put("/api/user/edit", indexController.updateUserInfo),
  app.delete("/api/user/delete", indexController.deleteUser),
  app.get("/api/user/:userId", indexController.getOtherUser)
};