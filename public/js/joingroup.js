$(document).ready(function() {

	var url = window.location.href;
	url = url.split("/");
	var i = url.length;
	var groupId = url[i-2];
	var email = url[i-1];

	getGroupInfo(groupId);
	emailSearch(email);

	function getGroupInfo(groupId) {
		$.get("/api/group", {group: groupId}).done(function(data) {
			console.log(data);
			for (var i = 0; i < data.Users.length; i++) {
				$("#group-members").append("<li>" + data.Users[i].email + "</li>");
				if (data.Users[i].id === data.admin) {
					$("#group-admin").html(data.Users[i].email);
				}
			};

			$("#group-name").html(data.groupName);
			$("#group-info").html(data.groupRules);
		})
	}

	function emailSearch(email) {
		$.get("/api/user/search", {email: email}).done(function(data) {
			if (data) {
				console.log("User exists");
			}
			else {
				console.log("User doesn't exist");
			}
		})
	}
});