$(document).ready(function() {
	// need to render an event for each group member so the event references name and user ID

	$(".my-draggable").draggable({
		revert: true,
		revertDuration: 0
	});
	$(".my-draggable").data('event', true);

	$.get("/api/group/calendar", function(data) {
	    $('#calendar').fullCalendar({
	    	events: data,
	    	eventDrop: function(event, revertFunc) {
	    		let eventData = {
	    			id: event.id,
	    			start: event.start.format()
	    		};
	    		$.ajax({
	    			method: "PUT",
	    			url: "/api/group/calendar/edit",
	    			data: eventData
	    		}).done(function() {

	    		});
	    	},
	    	droppable: true,
	    	drop: function(date) {
	    		let eventData = {
	    			title: $(this).text(),
	    			start: date.format()
	    		};
	    		console.log(eventData);
	    		$.post("/api/group/calendar/eventcreate", eventData, function() {
	    			console.log("Posted!");
	    		});
	    	},
	    	eventReceive: function( event ) {

	    	}

		});
	});

});