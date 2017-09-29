$(document).ready(function() {

	getEvents();

	function getEvents() {
		$.get("/api/group/calendar", function(data) {
			renderCalendar(data[0]);
		});
	}

	function renderCalendar(events) {
		$('#calendar').fullCalendar({
			events: events
		});
	}

});