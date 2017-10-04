$(document).ready(function() {

	var url = window.location.href;
	url = url.split("/");

	var i = url.length

	var groupId = url[i-1];

	var emailId = url[i];

	function getGroupInfo(data) {
		$.get("/api/group", data, function() {
			console.log("YAY!")
		})
	}


	function emailSearch(data) {

	}
});


/*doc .ready, 


param grab for email
param grab for user id
ajax to check email against db

