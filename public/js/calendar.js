$(document).ready(function() {

	getEvents();

	function getEvents() {
		$.get("/api/group/calendar", function(data) {
			// doesn't work, not sure why
			if (data[2].isAdmin) {
				$("#admin-dropdown").show();
				renderCalendar(data[0]);
			}
			else {
				renderCalendar(data[0]);
			}
		});
	}

	function renderCalendar(events) {
		$('#calendar').fullCalendar({
			events: events
		});
	}

});