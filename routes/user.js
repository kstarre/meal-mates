let express = require('express');
let router = express.Router();

router.get("/viewprofile", function(req, res) {
  res.sendFile(__dirname + "/public/viewprofile.html");
});

router.get("/editprofile", function(req, res) {
  res.sendFile(__dirname + "/public/editprofile.html");
});

module.exports = router;

