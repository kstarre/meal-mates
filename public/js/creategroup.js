$(document).ready(function() {

	var userID;
	// Add event listener for the form submit
	// $("#create-group").on("submit", handleSubmit);
	getID();

	// Function for getting user ID
	function getID() {
		$.get("/api/user", function(data) {
			userID = data.id;
			$("#admin-id").val(userID);
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
		// createGroup(groupData);


	}


});