const path = require("path");
const db = require("../models");

module.exports = {
	// HTML Routes
	createGroupView: function(req, res) {
		res.sendFile(path.join(__dirname, "../public/creategroup.html"));
	},
	adminGroupView: function(req, res) {
		res.sendFile(path.join(__dirname, "../public/admingroup.html"));
	},
	groupView: function(req, res) {
		res.sendFile(path.join(__dirname, "../public/group.html"));
	},
	viewCalendar: function(req, res) {
		res.sendFile(path.join(__dirname, "../public/calendar.html"));
	},


	groupView: function(req, res) {
		res.sendFile(path.join(__dirname, "../public/group.html"));
	},
	groupAdmin: function(req, res) {
		res.sendFile(path.join(__dirname, "../public/group.html"));
	},
	groupCalendar: function(req, res) {
		res.sendFile(path.join(__dirname, "../public/calendar.html"));
	},
	groupAdminCal: function(req, res) {
		res.sendFile(path.join(__dirname, "../public/calendar.html"));
	},
  
// 	// GET group
// 	group: function(req, res) {
// 		console.log("\nreq.params.id");
// 		console.log(req.params.id);
		
// },

	// API Routes
	// GET group
	getGroup: function(req, res) {  
		db.Lunchgroup.findOne({
	  		where: {
	  			id: req.body.id
	  			id: req.user.LunchgroupId
	  		},
	  		include: [ { model: db.User} ]
	  	}).then(function(lunchgroup) {
	  		res.json(lunchgroup);
	  	});
	},

	// create/POST new group 
	createNewGroup: function(req, res) {
		db.Lunchgroup.create({
			groupName: req.body.groupName,
			groupSize: req.body.groupSize,
			groupRules: req.body.groupRules,
			admin: req.user.id
		}).then(function(results, created) {
			db.User.update({
				admin: true,
				LunchgroupId: results.id
			}, {
				where: {
					id: req.user.id
				}
			}).then(function() {
				// Switch to get group page
				res.redirect("/group/admin"); //change string to variable



			}).then(function(results) {
				res.json(results);
			});
		});
	},

	// edit/POST group
	groupEdit: function(req, res, next) {
		db.Lunchgroup.update(
			req.body,
			{
				where: {
					id: req.user.LunchgroupId
				}
		}).then(function(lunchgroup) {
			res.json(lunchgroup);
		});
	},

	
	// DELETE group
	groupDelete: function(req, res) {
		db.Lunchgroup.destroy({
			where: {
				id: req.body.id
		    }
    	}).then(function(results) {
    		res.json(results);
    	});		
	},

	getCalendarInfo: function(req, res) {
		db.Eventdate.findAll({
			where: {
				LunchgroupId: req.user.LunchgroupId
			}
		}).then(function(events) {
			let results = [];
			results.push(events); 
			db.User.findAll({
				where: {
					LunchgroupId: req.user.LunchgroupId
				}
			}).then(function(users) {
				results.push(users);
				res.json(results);
			})
		});
	},

	calendarEdit: function(req, res) {
		// Not complete
	},

	findUserbyId: function(req,res) {
		db.User.findOne({
			where: {
				id: req.body.id
			}
		}).then(function(data) {
			res.json(data);
		}).catch(function(err) {

			console.log(err);

		db.Eventdate.update(
			req.body,
			{
				where: {
					id: req.body.id
				}
			}).then(function(results) {
				res.json(results);
			});
		}
	},

	eventCreate: function(req, res) {
		db.Eventdate.create({
			start: req.body.start,
			title: req.body.title,
			LunchgroupId: req.user.LunchgroupId,
			UserId: req.body.UserId
		}).then(function(results) {
			res.json(results);
		})
	}

};