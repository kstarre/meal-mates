$(document).ready(function() {
	
	getGroup();

	function getGroup() {
		$.get("/api/group", function(data) {
			let adminID = data.admin;
			for (var i = 0; i < data.Users.length; i++) {
				$("#group-members").append("<li>" + data.Users[i].email + "</li>");
				if (data.Users[i].id === adminID) {
					$("#group-admin").html(data.Users[i].email);
				}
			};

			$("#group-name").html(data.groupName);
			$("#group-info").html(data.groupRules);
			console.log(data);
		});
	}

});