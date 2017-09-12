$( document ).ready(function() {

$("#register-button").on("submit",function(e) {
   e.preventDefault(); // cancel submission
   window.location.replace("./editprofile.html");
});

  

});


