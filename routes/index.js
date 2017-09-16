let express = require('express');
let router = express.Router();
let indexController = require("../controllers/indexController");
let passport = require('passport');


// Get routes
router.get("/", indexController.home);

router.get("/viewprofile/:id", indexController.isLoggedIn, indexController.viewProfile);

router.get("/editprofile/:id", indexController.isLoggedIn, indexController.editProfile);

// Post routes
router.post("/signup", passport.authenticate('local-signup', {
	successRedirect: '/editprofile/:id',
	failureRedirect: '/',
	failureFlash: true
}));

router.post('/signin', passport.authenticate('local-signin', {
	successRedirect: '/editprofile/:id',
	failureRedirect: '/',
	failureFlash: true
}));

module.exports = router;