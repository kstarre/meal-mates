$(document).ready(function() {


	$("#form-login").on("submit", function(event) {
		event.preventDefault();
		$.post("/signin", $("#form-login").serialize(), function(response){
			if( response.successRedirect ){
				window.location.href = response.successRedirect;
			}
		});
	});	

	$("#form-signup").on("submit", function(event) {
		event.preventDefault();
		$.post("/signup", $("#form-signup").serialize(), function(response) {
			if( response.successRedirect ){
				window.location.href = response.successRedirect;
			}
		});
	});

});