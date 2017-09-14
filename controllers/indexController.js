module.exports = {

	signup = function(req, res) {
		res.render("signup");
	},
	signin = function(req, res) {
		res.render('signin', {loginMessage: req.flash('loginMessage')});
	},
	logout = function(req, res) {
		res.session.destroy(function(err) {
			res.redirect("/");
		})
	},
	isLoggedIn = function(req, res, next) {
		if ( req.isAuthenticated() )
	}
};