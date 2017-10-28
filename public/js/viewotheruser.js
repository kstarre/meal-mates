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
			if ( (!data) || (groupId !== data.LunchgroupId) ) {
				window.location.href = "/";
			} else {
				$("#profile-first-name").html(data.firstName);
				$("#profile-last-name").html(data.lastName);
				$("#profile-email").html(data.email);
				$("#profile-phone").html(data.phoneNumber);
				$("#profile-dietary").html(data.dietaryRestrictions);
				$("#profile-allergies").html(data.foodAllergies);
				$("#profile-image").attr("src", "img/images/upload_images/" + data.imageLink);
				getGroup();
			}
		});
	}

	function getGroup() {
		$.get("/api/group", function(data) {
			if (data) {
				$("#group-name-render").html(data.groupName);
			}
		});
	}

});