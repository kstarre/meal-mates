//public/js/viewgroup.js
$(document).ready(function() {

	var groupController = require('../controllers/groupController');
	var indexController = require('../controllers/indexController');

	var groupID;

	getGroupID();

	// Function for getting group ID  CHECK AOI ROUTES FOR BOTH OF THESE
	function getGroupID() {
		$.get("/api/group", function(data) {
			groupID = data.id;
		}).done(function() {
			getGoup(groupID);
			getMembers(groupID);
		});
	}

	function getGroup(id) {
		$.get("/api/group/" + id, function(data) {
			console.log(data);
			$("#group-name").val(data.groupName);
			$("#group-size").val(data.groupSize);
			$("#admin").val(data.admin);
			$("#group-rules").val(data.groupRules);
			$("group-start-date").val(data.createdAt);
		});
	}bers

	function getMem
});

