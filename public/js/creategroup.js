$(document).ready(function() {

	let userID;
	// Add event listener for the form submit
	$("#create-group").on("submit", handleSubmit);
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
			groupName: $("#first-name").val().trim(),
			groupSize: parseInt( $("#group-size-select").val() ),
			groupRules: $("#group-info").val().trim(),
			admin: userID
		};
		createGroup(groupData);
	}

	function createGroup(data) {
		$.post("/api/group/new", data, function() {
			// Change this to be the admin view of group page
			window.location.href = "/"
		})
	}
});