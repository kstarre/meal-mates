let express = require('express');
let router = express.Router();

router.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

router.get("/group", function(req, res) {
  res.sendFile(__dirname + "/public/group.html");
});

router.get("/viewprofile", function(req, res) {
  res.sendFile(__dirname + "/public/viewprofile.html");
});

router.get("/editprofile", function(req, res) {
  res.sendFile(__dirname + "/public/editprofile.html");
});



module.exports = router;