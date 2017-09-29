$(document).ready(function() {
    // let groupID;
    // $("#form-edit-profile").on("submit", handleSubmit);
    // getID();
    // // Function for getting user ID
    // function getID() {
    //     $.get("/api/user", function(data) {
    //         groupID = data.LunchgroupId;
    //     }).done(function() {
    //         getGroup(groupID);
    //     });
    // }

    // getGroup(groupID);

    // function getGroup(id) {
    //     $.get("/api/group/" + id, function(data) {
    //         console.log(data);
    //         let adminID = data.admin;
    //         for (var i = 0; i < data.Users.length; i++) {
    //             $("#group-members").append("<li>" + data.Users[i].email + "</li>");
    //             if (data.Users[i].id === adminID) {
    //                 $("#group-admin").html(data.Users[i].email);
    //             }
    //         };
    //         $("#group-name").html(data.groupName);
    //         $("#group-info").html(data.groupRules);
    //         //console.log(data);
    //     });
    // }

    function handleSubmit(event) {
        event.preventDefault();
        var groupData = {
            groupName: $("#").val().trim(),
            groupSize: $("#").val(),
            groupRules: $("#").val().trim()
        };
        updateGroup(groupData);
    }
    function updateGroup(data) {
        $.ajax({
            method: "PUT",
            url: "/api/group/edit",
            data: data
        }).done(function() {
            window.location.href = "/group";
        });
    }

   
})