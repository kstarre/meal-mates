const express = require('express');
const router = express.Router;

const db = require("../models");

// This file will consist of looking at and editing your profile page - 2

// GET user by name
/*router.get('/user/:id', function(req, res, next) {
	// Search DB for a User
	db.User.findOne({
		where: {
			id: req.params.id
		},
		include: {
			model: db.Lunchgroup
		}
	}).then((user) => {
		console.log(user)
		// Get the user's group

		res.render('viewprofile',
			{
				title: "Meal-Mates",
				user: user, 
				lunchgroup: lunchgroup
			});
		// if user doesn't exist
	}).catch((err) => {
		res.redirect('/');
	});
});

module.exports = router;*/