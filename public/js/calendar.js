$(document).ready(function() {

	getEvents();
	isAdmin();

	function getEvents() {
		$.get("/api/group/calendar", function(data) {
			// doesn't work, not sure why
			renderCalendar(data[0]);
		});
	}

	function renderCalendar(events) {
		$('#calendar').fullCalendar({
			events: events
		});
	}

	function isAdmin() {
		$.get("/api/user", function(data) {
			if(!data.admin) {
				$("#admin-dropdown").hide();
			}
		})
	}

});