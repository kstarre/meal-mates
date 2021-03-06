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
	adminCalendar: function(req, res) {
		res.sendFile(path.join(__dirname, "../public/admincalendar.html"));
	},
	invite: function(req, res) {
		req.session.invite_inviteCode = req.params.inviteCode;
		req.session.invite_groupId = req.params.groupId;
		res.sendFile(path.join(__dirname, "../public/invite.html"));
	},
	joinOrCreateGroup: function(req, res) {
		res.sendFile(path.join(__dirname, "../public/joingroup.html"));
	},


	// API Routes
	// GET group
	getGroup: function(req, res) { 
		if (req.session.invite_inviteCode) {
			db.Lunchgroup.findOne({
		  		where: {
		  			id: req.session.invite_groupId
		  		},
		  		include: [ { model: db.User} ]
		  	}).then(function(lunchgroup) {
		  		res.json(lunchgroup);
		  	});		
		} else {
			db.Lunchgroup.findOne({
				where: {
					id: req.user.LunchgroupId
				},
				include: [ { model: db.User }]
			}).then(function(lunchgroup) {
				res.json(lunchgroup);
			});	
		}
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
	groupEdit: function(req, res) {
		db.Lunchgroup.update(req.body, {
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
		db.Eventdate.update(req.body, {
			where: {
				id: req.body.id
			}
		}).then(function(results) {
			res.json(results);
		});
	},

	eventCreate: function(req, res) {
		db.Eventdate.create({
			start: req.body.start,
			title: req.body.title,
			LunchgroupId: req.user.LunchgroupId,
			UserId: req.body.UserId
		}).then(function(results) {
			res.json(results);
		});
	},

	eventDelete: function(req, res) {
		db.Eventdate.destroy({
			where: {
				UserId: req.user.id
			}
		}).then(function(results) {
			res.json(results);
		})
	},

	inviteSearch: function(req, res) {
		db.Invitation.findOne({
			where: {
				LunchgroupId: req.session.invite_groupId,
				inviteCode: req.session.invite_inviteCode
			}
		}).then(function(results) {
			res.json(results);
		});
	},

	joinGroup: function(req, res) {
		db.User.update({
			LunchgroupId: req.session.invite_groupId
		}, {
			where: {
				id: req.user.id
			}
		}).then(function(results) {
			res.json(results);
		});
	},

	inviteCreate: function(req, res) {
		db.Invitation.create({
			inviteCode: req.body.inviteCode,
			LunchgroupId: req.user.LunchgroupId
		}).then(function(results) {
			res.json(results);
		});
	}

};