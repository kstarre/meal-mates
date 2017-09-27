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
		// not complete
		let events = [
			{
				title: 'Jane',
				start: '2017-09-13'
			},
			{
				title: "Mary",
				start: '2017-09-12'
			}
		]
		res.json(events);
	},

	calendarEdit: function(req, res) {
		// Not complete
	}

};