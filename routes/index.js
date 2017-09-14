let express = require('express');
let router = express.Router();
let passport = require('passport');

// Get routes
router.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

router.get("/signup", );

router.get("/signin", );

router.get("/signout", );

// Post routes
router.post("/signup", passport.authenticate('local-signup', {
	successRedirect: '/',
	failureRedirect: '/signup',
	failureFlash: true
}));

router.post('/signin', passport.authenticate('local-signin', {
	successRedirect: '/',
	failureRedirect: '/signin',
	failureFlash: true
}));

