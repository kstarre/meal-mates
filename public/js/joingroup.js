$(document).ready(function() {

	isAdmin();
	getGroupInfo();
	$("#join-group").on("click", joinGroup);


	function codeSearch() {
		$.get("/api/invite/search").done(function(data) {
			if (data === null) {
				console.log("Code does not match");
				window.location.href = "/";
			}
			// check if code expired
		});
	}
	
	function getGroupInfo() {
		$.get("/api/group").done(function(data) {
			for (var i = 0; i < data.Users.length; i++) {
				if (data.Users[i].id === data.admin) {
					$("#group-admin").html(data.Users[i].email);
				}
			};

			$("#group-name").html(data.groupName);
			$("#group-info").html(data.groupRules);
		})
	}

	function joinGroup() {
		codeSearch();
		$.ajax({
			method: "PUT",
			url: "/api/group/join"
		}).done(function() {
			window.location.href = "/group";
		});
	}

	function isAdmin() {
		$.get("/api/user", function(data) {
			if(!data.admin) {
				$("#admin-dropdown").hide();
			}
		});
	}

});