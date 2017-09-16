let express = require('express');
let router = express.Router();
//let indexController = require("../controllers/indexController");
let passport = require('passport');


// Get routes
router.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

router.get("/signout", indexController.signout);


// Post routes
router.post("/signup", passport.authenticate('local-signup', {
	successRedirect: '/editprofile/:id',
	failureRedirect: '/signup',
	failureFlash: true
 }));


router.post('/signin', passport.authenticate('local-signin', {
	successRedirect: '/editprofile/:id',
	failureRedirect: '/signin',
	failureFlash: true
}));

module.exports = router;