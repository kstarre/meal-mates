module.exports = {

	home: function(req, res) {
		res.sendFile(__dirname + "/public/index.html");
	},
	viewProfile: function(req, res) {
		res.sendFile(__dirname + "/public/viewprofile.html");
	},
	editProfile: function(req, res) {
		res.sendFile(__dirname + "/public/editprofile.html");
	},
	isLoggedIn: function(req, res, next) {
		if ( req.isAuthenticated() ) {
			return next();
		}
		res.redirect("/signin");
	}
};