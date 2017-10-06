/*
* GET home page.
*/
$(document).ready(function() {

exports.index = function(req, res){
    message = '';
   if(req.method == "POST"){
      var post  = req.body;
      var name= post.user_name;
      var pass= post.password;
      var fname= post.first_name;
      var lname= post.last_name;
      var mob= post.mob_no;


if (!req.files)
	return res.status(400).send.send('No files were uploaded.');

var file = req.files.uploaded_images;
var img_name = file.name;

	if(file.mimetype == "image/jpeg"  || file.mimetype == "image/png" || file.mimetype == "image/gif"){

		file.mv('../img/images/uploaded_images/'+file.name, function(err) {

			if (err)

				return res.status(500).send(err);
			$.ajax({
				method: "PUT",
				url: "/api/user/imageupload",
				data: img_name
			}).done(function() {
				window.location.href = "/viewprofile";
			});
		});
	} else {
		message = "This format is not allowed...";
		res.json(message);
	} else {
		window.location.href = "/viewprofile";
	}

}
}

});
 
