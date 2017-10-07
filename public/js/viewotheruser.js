$(document).ready(function() {
	var url = window.location.href;
	url = url.split("/");
	var userId = url[url.length - 1];
	var groupId;
	getUser();



	// checking if user logged in is admin for dropdown
	function getUser() {
		$.get("/api/user", function(data) {
			groupId = data.LunchgroupId;
			if(!data.admin) {
				$("#admin-dropdown").hide();
			}
			getOtherUser();
		})
	}

	// Function for retrieving user info
	function getOtherUser() {
		$.get("/api/user/" + userId, function(data) {
			if ( (groupId !== data.LunchgroupId) || (!data) ) {
				window.location.href = "/";
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