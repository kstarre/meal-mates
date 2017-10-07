$(document).ready(function() {

	// Add event listener for the form submit
	$("#form-edit-profile").on("submit", handleSubmit);
	$("#delete-account-btn").on("click", handleDelete);
	$("#leave-group-btn").on("click", leaveGroup);
	getUser();

	// Function for retrieving user info
	function getUser() {
		$.get("/api/user", function(data) {
			if(!data.admin) {
				$("#admin-dropdown").hide();
			}
			$("#first-name").val(data.firstName);
			$("#last-name").val(data.lastName);
			$("#phone-number").val(data.phoneNumber);
			$("#dietary-restrictions").val(data.dietaryRestrictions);
			$("#food-allergies").val(data.foodAllergies);
			getGroup();
		});
	} 

	function getGroup() {
		$.get("/api/group", function(data) {
			if (!data) {
				$("#leave-group-btn").hide();
			}
			$("#group-name-render").html(data.groupName);
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

	function handleDelete(event) {
		event.preventDefault();

		// confirm delete
		if (window.confirm("Are you sure you want to delete your account?")) {
			deleteUser();
		}

		// can't delete if admin of group?
	}

	function deleteUser() {
		$.ajax({
			method: "DELETE",
			url: "/api/user/delete"
		}).done(function() {
			window.location.href = "/";
		});
	}

	function leaveGroup(event) {
		event.preventDefault();
		// confirm leave
		if (window.confirm("Are you the group's admin?")) {
			alert("Sorry, you can't leave the group.");
			window.location.href = "/";
		}
		else {
			if (window.confirm("OK.  Are you sure you want to leave this group?")) {
				$.ajax({
					method: "PUT",
					url: "/api/user/edit",
					LunchgroupId: null
				}).done(function() {
					$.ajax({
		                method: "DELETE",
		                url: "/api/group/calendar/eventdelete"
		            }).done(function() {
		                window.location.reload(true);
		            });
				});
			}
		}
	}
});