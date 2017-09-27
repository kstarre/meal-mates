$(document).ready(function() {

	let groupID;
	$("#some-form-id").on("submit", handleSubmit);
	//$("#some-delete-button").on("submit", handleDelete);
	getID();

	// Function for getting user ID
	function getID() {
		$.get("/api/user", function(data) {
			groupID = data.LunchgroupId;
		}).done(function() {
			getGroup(groupID);
		});
	}

	function getGroup(id) {
		$.get("/api/group/" + id, function(data) {
			let adminID = data.admin;
			for (var i = 0; i < data.Users.length; i++) {
				$("#group-members").append("<li>" + data.Users[i].email + "</li>");
				if (data.Users[i].id === adminID) {
					$("#group-admin").html(data.Users[i].email);
				}
			};

			$("#group-name").html(data.groupName);
			$("#group-info").html(data.groupRules);
			//console.log(data);
		});
	}

	function handleSubmit(event) {
		event.preventDefault();

		var groupData = {
			groupName: $("#").val().trim(),
			groupSize: $("#").val(),
			groupRules: $("#").val().trim(),
			id: groupID
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
	function handleDelete(event) {
		event.preventDefault();

		// some type of pop-up or model that asks are you sure?
		// and gives you the option of just making someone else the admin
		// only if they click "no, i want to delete"
		// or should we not be able to delete at all if there are other people in group?

		deleteGroup();
	}

	function deleteGroup() {
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

	// WIP, needs event listener
	function changeAdmin(event) {
		event.preventDefault();

		// some type of pop-up or model that asks are you sure?
		// gives you dropdown of group members (with hidden id to reference)

		let groupData = {
			id: groupID,
			admin: /*eference hidden id from dropdown*/
			// also need to change user's admin boolean from true to false
			// and new admin's from false to true
		};

		// might need a new function to handle group and user changes
		updateGroup(groupData);
	}

});