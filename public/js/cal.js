$( document ).ready(function() {

	$( function() {
    $( "#draggable" ).draggable();
  } );

// full calendar js
var date = new Date();
var d = date.getDate();
var m = date.getMonth();
var y = date.getFullYear();

$('#calendar').fullCalendar({

	
        // put your options and callbacks here

header: {
    left:   'title',
    center: '',
    right:  'today prev,next'
},

    })
});


