$( document ).ready(function() {

$("#register-button").on("submit",function(e) {
   e.preventDefault(); // cancel submission
   window.location.replace("./editprofile.html");
});

//if user is logged then navbar will display

//if member is not in a group then group.html will ask whether they want to create one

//if member creates a group they will have their admin boolean change from default false to true


//if member is and admin of a group the group page will have editing capability

// rendering sql data on profile page at index


// rendering group data on group profile page at index

// full calendar js
$('#calendar').fullCalendar({
        // put your options and callbacks here

header: {
    left:   'title',
    center: '',
    right:  'today prev,next'
},

    })
});


