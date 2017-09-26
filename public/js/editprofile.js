$(document).ready(function() {

	let userID;
	let groupID;
	// Add event listener for the form submit
	$("#form-edit-profile").on("submit", handleSubmit);
	//$("#").on("submit", handleDelete);
	getID();

	// Function for getting user ID
	function getID() {
		$.get("/api/user", function(data) {
			userID = data.id;
			groupID = data.LunchgroupId;
		}).done(function() {
			getUser(userID);
		});
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
			window.location.href = "/viewprofile";
		})
	}

	// WIP
	function handleDelete(event) {
		event.preventDefault();

		// some type of pop-up or model that asks are you sure?
		// only if they click "no, i want to delete"
		// can't delete if admin of group

		deleteUser();
	}

	function deleteUser() {
		$.ajax({
			method: "DELETE",
			url: "/api/user/delete",
			data: {
				id: userID
			}
		}).done(function() {
			window.location.href = "/";
		});
	}

	// WIP, needs event listener
	function leaveGroup(event) {
		event.preventDefault();

		// some type of pop-up or model that asks are you sure?
		// only if they click "yes, i want to leave"
		// can't leave if admin of group

		var userData = {
			id: userID,
			LunchgroupId: groupID
		};

		updateUser(userData);
	}

});