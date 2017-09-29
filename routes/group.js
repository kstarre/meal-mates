let groupController = require("../controllers/groupController");
let indexController = require("../controllers/indexController");

module.exports = function(app) {

   
	// HTML Routes
	app.get("/group", indexController.isLoggedIn, groupController.groupView),
	app.get("/group/create", indexController.isLoggedIn, groupController.createGroupView),
	app.get("/group/admin", indexController.isLoggedIn, indexController.isAdmin, groupController.adminGroupView),
	app.get("/group/calendar", indexController.isLoggedIn, groupController.viewCalendar),
<<<<<<< HEAD

        app.get("/group/create", indexController.isLoggedIn, groupController.createGroupView),


        app.get("/group/admin/findId", indexController.isLoggedIn, groupController.findUserbyId),
//===============

        // API Routes
        // get group info
        app.get("/api/group", groupController.getGroup),

        // create new group
        app.post("/api/group/new", groupController.createNewGroup),

        // edit group
        app.put("/api/group/edit", groupController.groupEdit),
=======
	app.get("/group/calendar/admin", indexController.isLoggedIn, indexController.isAdmin, groupController.adminCalendar),
>>>>>>> dfd2792efca6f87411c3604c7db7b3da75cfd9ae

        // delete group page
        app.delete("/api/group/delete", groupController.groupDelete),

        // calendar route
        app.get("/group/calendar", groupController.groupCalendar)

    //=======================================

    app.get("/group/calendar", groupController.getCalendarInfo)

	// calendar route
	app.get("/api/group/calendar", groupController.getCalendarInfo),

	// edit calendar
	app.put("/api/group/calendar/edit", groupController.calendarEdit),

	// create new event
	app.post("/api/group/calendar/eventcreate", groupController.eventCreate)
};