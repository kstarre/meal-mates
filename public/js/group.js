$(document).ready(function() {

	getGroup();

	function getGroup() {
		$.get("/api/group", function(data) {
			if (data.isAdmin) {
				$("#admin-dropdown").show();
			}

			for (var i = 0; i < data.lunchgroup.Users.length; i++) {
				$("#group-members").append("<li>" + data.lunchgroup.Users[i].email + "</li>");
				if (data.lunchgroup.Users[i].id === data.lunchgroup.admin) {
					$("#group-admin").html(data.lunchgroup.Users[i].email);
				}
			};

			$("#group-name").html(data.lunchgroup.groupName);
			$("#group-info").html(data.lunchgroup.groupRules);
		});
	}

});