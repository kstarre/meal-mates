let express = require('express');
let router = express.Router();
let groupController = require("../controllers/groupController");

const db = require("../models");

// get group page
router.get("/group", groupController.group);

// create new group page
router.get("/group/new", groupController.groupNew); 

// edit group page
router.get("/group/edit", groupController.groupEdit);

// delete group page
router.get("/group/edit", groupController.groupDelete);

// calendar route
router.get("/group/calendar", groupController.calendar);

module.exports = router;

//----------------------------------------------------

module.exports = router;
