$(document).ready(function() {

	var url = window.location.href;
	url = url.split("/");
	var i = url.length;
	var inviteCode = url[i-1];
	var groupId = url[i-2];

	codeSearch();
	$("#form-login").on("submit", function(event) {
		event.preventDefault();
		var data = {
			email: $("#email").val(),
			password: $("#pws").val()
		};
		$.post("/signin?token=" + inviteCode + "&groupId=" + groupId, data, function() {

		});
	});

	function codeSearch() {
		$.get("/api/invite/search", {id: groupId, code: inviteCode}).done(function(data) {
			if (data === null) {
				console.log("Code does not match");
				window.location.href = "/";
			}
			// check if code expired
		});
	}


});