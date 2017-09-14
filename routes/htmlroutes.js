let express = require('express');
let router = express.Router();


router.get("/group", function(req, res) {
  res.sendFile(__dirname + "/public/group.html");
});



module.exports = router;