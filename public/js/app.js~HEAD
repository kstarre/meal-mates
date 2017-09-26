$( document ).ready(function() {

	var nameInput = $("#group-name");
    var emailInput = $("#group-info");
    var groupSize = $("#group-size-select");



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

    });

	// for moving posts around on calendar
	function deletePost(id) {
    $.ajax({
      method: "DELETE",
      url: "/api/posts/" + id
    })
    .done(function() {
      getPosts(postCategorySelect.val());
    });
  }

});


