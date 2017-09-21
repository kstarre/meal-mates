const path = require("path");
const db = require("../models");

module.exports = {
	home: function(req, res) {
		res.sendFile(path.join(__dirname, "/public/index.html"));
	},
	viewProfile: function(req, res) {
		console.log(req.user);
		res.sendFile(path.join(__dirname, "../public/viewprofile.html"));
	},
	editProfile: function(req, res) {
		res.sendFile(path.join(__dirname, "../public/editprofile.html"));
	},
	isLoggedIn: function(req, res, next) {
		if ( req.isAuthenticated() ) {
			return next();
		}
		res.redirect("/");
	},
	logout: function(req, res) {
		req.session.destroy(function(err) {
			res.redirect("/");
		})
	},
	getUserInfo: function(req, res) {
		db.User.findOne({
			where: {
				id: req.params.id
			}
		}).then( results => {
			res.json(results);
		});
	},
	updateUserInfo: function(req, res) {
		db.User.update(
			req.body, 
			{
				where: {
					id: req.body.id
				}
			}).then(function(results) {
				res.json(results);
			});
	}
};

/*	signin: function(req, res) {
	  passport.authenticate('local-signin',  {
	  	successRedirect: '/viewprofile?user_id=' + req.user.id,
	  	failureRedirect: '/'
	  })
	}*/