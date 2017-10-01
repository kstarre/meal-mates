$(document).ready(function() {

	var url = window.location.href;
	url = url.split("/");
	var i = url.length;
	var inviteCode = url[i-1];
	var groupId = url[i-2];

	codeSearch();

	function codeSearch() {
		$.get("/api/invite/search", {id: groupId, code: code}).done(function(data) {
			console.log(data);
			// check if code expired
			window.location.href = "/group/join/:groupId";
		});
	}

});