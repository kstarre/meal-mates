$(document).ready(function() {

	var url = window.location.href;
	url = url.split("/");
	var i = url.length;
	var groupId = url[i-1];

	getGroupInfo(groupId);
	$("#join-group").on("click", joinGroup);

	function getGroupInfo(groupId) {
		$.get("/api/group", {group: groupId}).done(function(data) {
			console.log(data);
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
		$.ajax({
			method: "PUT",
			url: "/api/group/join",
			data: {
				LunchgroupId: groupId
			}
		}).done(function() {
			window.location.href = "/group";
		});
	}

});