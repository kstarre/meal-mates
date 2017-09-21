let groupController = require("../controllers/groupController");
let indexController = require("../controllers/indexController");

module.exports = function(app) {
	// HTML Routes
	app.get("/group", indexController.isLoggedIn, groupController.groupView),
	app.get("/group/create", indexController.isLoggedIn, groupController.createGroupView),
	app.get("/group/admin", indexController.isLoggedIn, groupController.adminGroupView),
	app.get("/group/calendar", indexController.isLoggedIn, groupController.viewCalendar),
	app.get("/group/calendar/admin", indexController.isLoggedIn, groupController.adminCalendarView),


	// API Routes
	// get group page
	app.get("/api/group", groupController.getGroup),

	// create new group page
	app.get("/api/group/new", groupController.groupNewGroup),

	// edit group page
	app.get("/api/group/edit", groupController.groupEdit),

	// delete group page
	app.get("/api/group/delete", groupController.groupDelete),

	// calendar route
	app.get("/group/calendar", groupController.calendar)
};