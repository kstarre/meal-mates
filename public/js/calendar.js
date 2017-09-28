$(document).ready(function() {

	$.get("/api/group/calendar", function(data) {
	    $('#calendar').fullCalendar({
	    	events: data
		});
	});

});