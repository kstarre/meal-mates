const path = require("path");
const db = require("../models");


module.exports = {

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
		
	  db.Lunchgroup.findOne({

	  	where: {
	  		// groupName: req.param.name,
	  		//added id search in case of groups sharing names
	  		id: req.param.id
	  	}
	  }).then(function(lunchgroup) {

	  	console.log("\n\n^^^^^^^^^^^^^^^^^^^^^Lunchgroup^^^^^^^^^^^^^^^^^^^^^^^^^^^^^")
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
	// calendar: function(req, res) {
	// 	res.sendFile(path.join(__dirname, "../public/calendar.html"));
	// }


    // calendar route
    // calendar = function() {

    // }
}