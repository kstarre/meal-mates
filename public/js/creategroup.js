$(document).ready(function() {

	isAdmin();
	// Add event listener for the form submit
	$("#create-group").on("submit", handleSubmit);

	function handleSubmit(event) {
		event.preventDefault();
		var groupData = {
			groupName: $("#group-name").val().trim(),
			groupSize: $("#group-size-select").val(),
			groupRules: $("#group-info").val().trim()
		};
		createGroup(groupData);
	}

	function createGroup(data) {
		$.post("/api/group/new", data, function() {
			window.location.href = "/group";
		});
	}

	function isAdmin() {
		$.get("/api/user", function(data) {
			if(data.admin) {
				$("#admin-dropdown").show();
			}
		})
	}
});

/*

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

*/