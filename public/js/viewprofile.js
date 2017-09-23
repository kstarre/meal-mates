$(document).ready(function() {

	let userID;
	getID();

	// Function for getting user ID
	function getID() {
		$.get("/api/user", function(data) {
			userID = data.id;
		}).done(function() {
			getUser(userID);
		});
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
		console.log(data);
	}

});