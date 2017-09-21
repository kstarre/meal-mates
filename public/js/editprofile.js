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
			console.log(data);
			$("#first-name").val(data.firstName);
			$("#last-name").val(data.lastName);
			$("#phone-number").val(data.phoneNumber);
			$("#dietary-restrictions").val(data.dietaryRestrictions);
			$("#food-allergies").val(data.foodAllergies);
		});
	}

});