$(document).ready(function() {
	var groupId;
	getGroup();
	isAdmin();
	$(document).on("click", ".group-member", viewUserPage);

	function getGroup() {
		$.get("/api/group", function(data) {
			groupId = data.id;
			for (var i = 0; i < data.Users.length; i++) {
				$("#group-members").append("<li class='group-member' data-userid=" + data.Users[i].id + ">"  + data.Users[i].email + "</li>");
				if (data.Users[i].id === data.admin) {
					$("#group-admin").html(data.Users[i].email);
				}
			};

			$("#group-name").html(data.groupName);
			$("#group-info").html(data.groupRules);
		});
	}

	function isAdmin() {
		$.get("/api/user", function(data) {
			if(!data.admin) {
				$("#admin-dropdown").hide();
			}
		})
	}

	function viewUserPage() {
		window.location.href = "/viewprofile/" + groupId + "/" + $(this).data("userid");
	}

});