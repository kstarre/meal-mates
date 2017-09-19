let groupController = require("../controllers/groupController");

module.exports = function(app) {
	// get group page
	app.get("/group", groupController.group),

	// create new group page
	app.get("/group/new", groupController.groupNew),

	// edit group page
	app.get("/group/edit", groupController.groupEdit),

	// delete group page
	app.get("/group/edit", groupController.groupDelete),

	// calendar route
	app.get("/group/calendar", groupController.calendar)
};