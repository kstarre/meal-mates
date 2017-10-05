$(document).ready(function() {

	getEvents();

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

});