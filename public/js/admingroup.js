$(document).ready(function() {

	$("#admin-dropdown").show();
	$("#form-edit-profile").on("submit", handleSubmit);
	//$("#some-delete-button").on("submit", handleDelete);
	getGroup();

	function getGroup() {
		$.get("/api/group", function(data) {

			for (var i = 0; i < data.Users.length; i++) {
				$("#group-members").append("<li>" + data.Users[i].email + "</li>");
			};

			$("#group-name").val(data.groupName);
			$("#group-info").val(data.groupRules);
			$("#group-size-select").val(data.groupSize);
		});
	}

	function handleSubmit(event) {
		event.preventDefault();

		var groupData = {
			groupName: $("#group-name").val().trim(),
			groupSize: $("#group-size-select").val(),
			groupRules: $("#group-info").val().trim()
		};

		updateGroup(groupData);
	}

	function updateGroup(data) {
		$.ajax({
			method: "PUT",
			url: "/api/group/edit",
			data: data
		}).done(function() {
			window.location.href = "/group";
		});
	}

	// WIP
	// Delete group
	$("delete-group-btn").on("click", deleteGroup);
	function deleteGroup(event) {
		event.preventDefault();

		// confirm delete
		if (window.confirm("Are you sure you want to delete this group?")) {
			$.ajax({
				method: "DELETE",
				url: "/api/group/delete",
				data: {
					id: groupID
				}
			}).done(function() {
				window.location.href = "/";
			});
		}
	}
});
