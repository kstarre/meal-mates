$(document).ready(function() {

	getEventsAndUsers();

	function getEventsAndUsers() {
		$.get("/api/group/calendar", function(data) {
			renderCalendar(data[0]);
			renderExternalEvents(data[1]);
		});
	}

	function renderExternalEvents(users) {
		for (var i = 0; i < users.length; i++) {
			let externalEvent = $("<div>");
			externalEvent.addClass("my-draggable").html(users[i].email);
			externalEvent.data('event', {
				title: users[i].email, 
				UserId: users[i].id,
				startEditable: true
			});
			$("#external-events").append(externalEvent);
		}
		$(".my-draggable").draggable({
			revert: true,
			revertDuration: 0,
			zIndex: 999
		});
	}

	function renderCalendar(events) {
		$('#calendar').fullCalendar({
			events: events,
			eventStartEditable: true,
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
			},
			eventReceive: function( event ) {
				let eventData = {
					title: event.title,
					start: event.start.format(),
					UserId: event.UserId
				};
				$.post("/api/group/calendar/eventcreate", eventData, function() {
					console.log("Posted!");
				});
			}
		});
	}

});