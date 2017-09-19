const path = require("path");
const db = require("../models");

module.exports = {

	// GET group
	group: function(req, res) {  
	  db.Lunchgroup.findOne({
	  	where: {
	  		groupName: req.param.name
	  	},
	  	include: {
	  		model: db.User
	  	}
	  }).then(function(lunchgroup) {
	  	console.log(lunchgroup);

	  	res.sendFile(path.join(__dirname, "../public/group.html"));
	  	// if group does not exist
	  }).catch(function(err) {
	  	res.redirect("/");
	  });
	},

	// create/POST new group 
	groupNew: function(req, res, next) {
		db.Lunchgroup.findOrCreate({
			where: {
				groupName: req.body.groupName,
				groupSize: req.body.groupSize, 
				admin: req.body.admin,
				groupRules: req.body.groupRules
			}
		}).spread(function(lunchgroup, created) {
			res.sendFile(path.join(__dirname, "../public/editgroup.html"));
		});
	},

	// edit/POST group
	groupEdit: function(req, res, next) {
		db.Lunchgroup.update({
			where: {
				groupName: groupName,
				groupSize: groupSize,
				admin: admin,
				groupRules: groupRules
			}
		},{
			where: {
				groupName: req.body.groupName,
				groupSize: req.body.groupSize, 
				admin: req.body.admin,
				groupRules: req.body.groupRules
			}
		}).then(function(lunchgroup) {
			res.sendFile(path.join(__dirname, "../public/group.html"));
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
    	}).then(function() {
    		res.sendFile(path.join(__dirname, "../public/editprofile.html"));
    	});		
	},

	// GET calendar route
	calendar: function(req, res) {
		res.sendFile(path.join(__dirname, "../public/calendar.html"));
	}

};