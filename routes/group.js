let groupController = require("../controllers/groupController");
let indexController = require("../controllers/indexController");

module.exports = function(app) {

	// HTML Routes
	app.get("/group", indexController.isLoggedIn, groupController.groupView),
	app.get("/group/create", indexController.isLoggedIn, groupController.createGroupView),
	app.get("/group/admin", indexController.isLoggedIn, indexController.isAdmin, groupController.adminGroupView),
	app.get("/group/calendar", indexController.isLoggedIn, groupController.viewCalendar),
	app.get("/group/calendar/admin", indexController.isLoggedIn, indexController.isAdmin, groupController.adminCalendar),
	app.get("/group/invite/:groupId/:inviteCode", groupController.invite),
	app.get("/group/join/:groupId", indexController.isLoggedIn, groupController.joinOrCreateGroup),

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
	app.post("/api/group/calendar/eventcreate", groupController.eventCreate),

	// invite code search
	app.get("/api/invite/search", groupController.inviteSearch),

	// join group
	app.put("/api/group/join", groupController.joinGroup),

	// save invite info
	app.post("/api/invite/new", groupController.inviteCreate)
};
