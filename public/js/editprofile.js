$(document).ready(function() {

	// Add event listener for the form submit
	$("#form-edit-profile").on("submit", handleSubmit);
	//$("#").on("submit", handleDelete);
	getUser();

	// Function for retrieving user info
	function getUser() {
		$.get("/api/user", function(data) {
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
			dietaryRestrictions: $("#dietary-restrictions").val().trim()
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
	$("#edit-profile-delete").on("submit", handleDelete);
	deleteUser();

	function handleDelete(event) {
		event.preventDefault();

		// some type of pop-up or model that asks are you sure?
		function confirmDelete() {
			var x = confirm("Are you sure you want to delete your account?");
			if (x) {
				return true;
			}
			else {
				return false;
			}
		};
		alert("Are you sure you want to delete your account?");
		
		if (true) {
			deleteUser();
		};
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
	$("#edit-profile-grouplist").on("submit", leaveGroup)
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