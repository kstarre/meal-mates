const path = require("path");

module.exports = {

	home: function(req, res) {
		res.sendFile(path.join(__dirname, "../public/index.html"));
	},
	viewProfile: function(req, res) {
		res.sendFile(path.join(__dirname, "../public/viewprofile.html"));
	},
	editProfile: function(req, res) {
		res.sendFile(path.join(__dirname, "../public/editprofile.html"));
	},
	error: function(req, res) {
		res.sendFile(path.join(__dirname, "../public/error.html"));
	},
	signup: function(req, res) {
		res.sendFile(path.join(__dirname, "../public/signup.html"));
	},
	isLoggedIn: function(req, res, next) {
		if ( req.isAuthenticated() ) {
			return next();
		}
		res.redirect("/");
	}
};