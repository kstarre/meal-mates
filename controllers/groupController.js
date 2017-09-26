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
	adminCalendarView: function(req, res) {
		res.sendFile(path.join(__dirname, "../public/admincalendar.html"));
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
  
	// GET group
	group: function(req, res) {
		console.log("\nreq.params.id");
		console.log(req.params.id);
		
},
	// API Routes
	// GET group
	getGroup: function(req, res) {  

		db.Lunchgroup.findOne({
	  		where: {
	  			id: req.params.id
	  		},
	  		include: [ { model: db.User} ]
	  	}).then(function(lunchgroup) {
	  		res.json(lunchgroup);
	  	});
	},

	// create/POST new group 
	createNewGroup: function(req, res) {
		db.Lunchgroup.create(req.body).then(function(results, created) {
			console.log(results);
			db.User.update({
				admin: true,
				LunchgroupId: results.id
			}, {
				where: {
					id: req.body.admin
				}
			}).then(function() {
				// Switch to get group page
				res.redirect("/group");
			});
		});
	},

	// edit/POST group
	groupEdit: function(req, res, next) {
		db.Lunchgroup.update({
			where: {
				groupName: req.body.groupName,
				groupSize: req.body.groupSize, 
				admin: req.body.admin,
				groupRules: req.body.groupRules
			}
		}).then(function(lunchgroup) {
			res.json(lunchgroup);
		});
	},

	
	// DELETE group
	groupDelete: function(req, res) {
		db.Lunchgroup.Destroy({
			where: {
		      groupName: req.body.groupName,
				groupSize: req.body.groupSize, 
				admin: req.body.admin,
				groupRules: req.body.groupRules
		    }
    	}).then(function(results) {
    		res.json(results);
    	});		
	},

	// GET calendar route
	// calendar: function(req, res) {
	// 	res.sendFile(path.join(__dirname, "../public/calendar.html"));
	// }


    // calendar route
    // calendar = function() {

	getCalendarInfo: function(req, res) {
		// not complete
		db.Eventdate.findOne({
			where: {
				groupName: req.body.name
			}, 
			include: {
				model: db.Lunchgroup,
				model: db.User
			}
		}).then(function(calendar) {
		res.json(calendar);
	  	// if group does not exist
		}).catch(function(err) {
			res.redirect("/");
		});
	},

	calendarEdit: function(req, res) {
		// Not complete
	}

    // }
}