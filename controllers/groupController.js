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
			db.User.update({
				admin: true,
				LunchgroupId: results.id
			}, {
				where: {
					id: req.body.admin
				}
			});
		});
	},

	// edit/POST group
	groupEdit: function(req, res, next) {
		db.Lunchgroup.update(
			req.body,
			{
				where: {
					id: req.body.id
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
		// not complete
	},

	calendarEdit: function(req, res) {
		// Not complete
	}

};