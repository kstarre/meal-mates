let express = require('express');
let router = express.Router();

// create new group

router.get("/group", function(req, res) {
  res.sendFile(__dirname + "/public/group.html");
});

// admin group route

// calendar route

module.exports = router;
