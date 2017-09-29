//public/js/viewgroup.js
$(document).ready(function() {

	var groupController = require('../controllers/groupController');
	var indexController = require('../controllers/indexController');

	var groupID;

	getGroupID();

	//=====Katie's code

    $("#some-form-id").on("submit", handleSubmit);
    getID();
    // Function for getting user ID
    function getID() {
        $.get("/api/user", function(data) {
            groupID = data.LunchgroupId;
        }).done(function() {
            getGroup(groupID);
        });
    }
    function getGroup(id) {
        $.get("/api/group/" + id, function(data) {
            let adminID = data.admin;
            for (var i = 0; i < data.Users.length; i++) {
                $("#group-members").append("<li>" + data.Users[i].email + "</li>");
                if (data.Users[i].id === adminID) {
                    $("#group-admin").html(data.Users[i].email);
                }
            };
            $("#group-name").html(data.groupName);
            $("#group-info").html(data.groupRules);
            //console.log(data);
        });
    }
    //==== end Katie's code

	// Function for getting group ID  CHECK AOI ROUTES FOR BOTH OF THESE
	function getGroupID() {
		$.get("/api/group", function(data) {
			groupID = data.id;
		}).done(function() {
			getGoup(groupID);
			getMembers(groupID);
		});
	}

	function getGroup(id) {
		$.get("/api/group/" + id, function(data) {
			console.log(data);
			$("#group-name").val(data.groupName);
			$("#group-size").val(data.groupSize);
			$("#admin").val(data.admin);
			$("#group-rules").val(data.groupRules);
			$("group-start-date").val(data.createdAt);
		});
	}



	// need API routes to get indv users
	function getMembers(id) {

		$.get('/api/user/' + id, function(data) {

			$('')
		})
	}
});


