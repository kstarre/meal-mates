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
	// get group info
	app.get("/api/group", groupController.getGroup),

	// create new group
	app.post("/api/group/new", groupController.createNewGroup),

	// edit group
	app.put("/api/group/edit", groupController.groupEdit),

	// delete group page
	app.delete("/api/group/delete", groupController.groupDelete),

	// calendar route
	app.get("/api/group/calendar", groupController.getCalendarInfo),

	// edit calendar
	app.put("/api/group/calendar/edit", groupController.calendarEdit),

	// create new event
	app.post("/api/group/calendar/eventcreate", groupController.eventCreate)
};