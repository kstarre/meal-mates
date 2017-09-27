//routes/group.js

let groupController = require("../controllers/groupController");
let indexController = require("../controllers/indexController");

module.exports = function(app) {

//======html Routes

app.get("/group", groupController.groupView),
// app.get("/groupAdmin", groupController.groupAdmin),
app.get("/calendar", groupController.groupCalendar),
app.get("/calendarAdmin", groupController.groupAdminCal)



	//====API routes



	// get group page
	// app.get("/group/view", groupController.group),

	// create new group page
	// app.post("/group/new", groupController.groupNew),
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
	app.get("/group/calendar", groupController.groupCalendar)

	//=======================================

	// app.get("/api/group/view/:id", groupController.group)
	app.get("/group/calendar", groupController.getCalendarInfo)
};