$(document).ready(function() {
	getUser();

	// Function for retrieving user info
	function getUser() {
		$.get("/api/user", function(data) {
			if(data.admin) {
				$("#admin-dropdown").show();
			}
			$("#profile-first-name").html(data.firstName);
			$("#profile-last-name").html(data.lastName);
			$("#profile-email").html(data.email);
			$("#profile-phone").html(data.phoneNumber);
			$("#profile-dietary").html(data.dietaryRestrictions);
			$("#profile-allergies").html(data.foodAllergies);
			getGroup();
		});
	}

	function getGroup() {
		$.get("/api/group", function(data) {
			$("#group-name-render").html(data.groupName);
		});
	}

});