$(document).ready(function() {

	// Add event listener for the form submit
	$("#create-group").on("submit", handleSubmit);

	function handleSubmit(event) {
		event.preventDefault();
		var groupData = {
			groupName: $("#group-name").val().trim(),
			groupSize: $("#group-size-select").val(),
			groupRules: $("#group-info").val().trim()
		};
		createGroup(groupData);
	}

	function createGroup(data) {
		$.post("/api/group/new", data, function() {
			window.location.href = "/group";
		});
	}
});