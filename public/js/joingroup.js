$(document).ready(function() {

	let userID;
	// Add event listener for the form submit
	// $("#create-group").on("submit", handleSubmit);
	getID();

	// Function for getting user ID
	function getID() {
		$.get("/api/user", function(data) {
			userID = data.id;
		});
	}

	function handleSubmit(event) {
		event.preventDefault();
		var groupData = {
			groupName: $("#group-name").val().trim(),
			groupSize: $("#group-size-select").val(),
			groupRules: $("#group-info").val().trim(),
			admin: userID
		};
		getGroupMembers(groupData);
	}

	function getGroupMembers(data) {
		$.get("/api/group", data, function() {

			
		});
	}
});