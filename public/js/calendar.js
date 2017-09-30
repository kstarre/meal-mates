$(document).ready(function() {

	getEvents();

	function getEvents() {
		$.get("/api/group/calendar", function(data) {
			renderCalendar(data[0]);
		});
	}

	function renderCalendar(events) {
		$('#calendar').fullCalendar({
			header: {
				left: '',
				center: 'title',
				right: 'prev, next, today' 
			},
			editable: true,
			droppable: true,
			drop: function() {
				// is the "remove after drop" checkbox checked?
				if ($('#drop-remove').is(':checked')) {
					// if so, remove the element from the "Draggable Events" list
					$(this).remove();
				}
			},
			events: events
		});
	}

});