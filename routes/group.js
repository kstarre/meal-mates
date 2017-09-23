let groupController = require("../controllers/groupController");

module.exports = function(app) {

//======html Routes

app.get("/group", groupController.groupView),
app.get("/groupAdmin", groupController.groupAdmin),
app.get("/calendar", groupController.groupCalendar),
app.get("/calendarAdmin", groupController.groupAdminCal)



	//====API routes



	// get group page
	// app.get("/group/view", groupController.group),

	// create new group page
	app.post("/group/new", groupController.groupNew),

	// edit group page
	app.get("/group/edit", groupController.groupEdit),

	// delete group page
	app.get("/group/edit", groupController.groupDelete),

	// calendar route
	app.get("/group/calendar", groupController.groupCalendar)

	//=======================================

	app.get("/api/group/view/:id", groupController.group)
};