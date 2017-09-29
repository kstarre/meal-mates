const path = require("path");
const db = require("../models");

module.exports = {
	// HTML Routes
	home: function(req, res) {
		res.sendFile(path.join(__dirname, "../public/index.html"));
	},
	viewProfile: function(req, res) {
		res.sendFile(path.join(__dirname, "../public/viewprofile.html"));
	},
	editProfile: function(req, res) {
		res.sendFile(path.join(__dirname, "../public/editprofile.html"));
	},
	welcome: function(req, res) {
		res.sendFile(path.join(__dirname, "../public/welcome.html"));
	},

	// API Routes
	isLoggedIn: function(req, res, next) {
		if ( req.isAuthenticated() ) {
			return next();
		}
		res.redirect("/");
	},
	isAdmin: function(req, res, next) {
		if (req.user.admin) {
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
				id: req.user.id
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
					id: req.user.id
				}
			}).then(function(results) {
				res.json(results);
			});
	},
	deleteUser: function(req, res) {
		db.User.destroy({
			where: {
				id: req.user.id
			}
		}).then(function(results) {
			res.json(results);
		});
	}
};