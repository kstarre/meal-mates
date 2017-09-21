$(document).ready(function() {

	// Add event listener for the form submit
	$("#edit-profile").on("submit", handleSubmit);
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

	// Function for handling the submit of the form
	function handleSubmit(event) {
		event.preventDefault();

		var userData = {
			firstName: $("#first-name").val().trim(), 
			lastName: $("#last-name").val().trim(),
			phoneNumber: $("#phone-number").val().trim(),
			foodAllergies: $("#food-allergies").val().trim(),
			dietaryRestrictions: $("#dietary-restrictions").val().trim(),
			id: userID
		};

		updateUser(userData);
	}

	function updateUser(data) {
		$.ajax({
			method: "PUT",
			url: "/api/user/edit",
			data: data
		}).done(function() {
			window.location.href = "/viewprofile?_?user_id=" + data.id;
		})
	}

});