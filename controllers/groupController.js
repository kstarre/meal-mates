module.exports = {

	// put admin/edit group route
	groupEdit = function(req, res) {
		res.render("group");
	},

	// group query saving
	groupSave = function(req, res) {
		
	}

	// delete group
	groupDelete = function(req, res) {
		res.session.destroy(function(err) {
			res.redirect("/");
		});
	},

	// calendar route
	calendar = function() {

	}

};