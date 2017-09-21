$(document).ready(function() {

	// Looking for id param
	let url = window.location.search;
	let userID;
	if (url.indexOf("?user_id=") !== -1) {
		userID = url.split("=")[1];
		getUser(userID);
	}
	else {
		console.log("Something went wrong! No id parameter found.");
	}

	// Function for retrieving user info
	function getUser(id) {
		$.get("/api/user/" + id, function(data) {
			$("#profile-first-name").html(data.firstName);
			$("#profile-last-name").html(data.lastName);
			$("#profile-email").html(data.email);
			$("#profile-phone").html(data.phoneNumber);
			$("#profile-dietary").html(data.dietaryRestrictions);
			$("#profile-allergies").html(data.foodAllergies);
		});
	}

});