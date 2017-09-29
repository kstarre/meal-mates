$(document).ready(function() {

    var groupId;

    function getID() {
        $.get("/api/user", function(data) {
            console.log(data.LunchgroupId);
            id = data.LunchgroupId;

            groupId = data.LunchgroupId;
            console.log(groupId);
        })
    }

    getID();

    var url = window.location.href;
    url = url.split("group");



    

    var from, to, subject, text, url;
    $("#send_email").click(function() {
        to = $("#to").val();

        subject = "You've received an invitation to join Meal-Mates";

        url = url[0] + "/group/join/" + groupId;
        // url = url.link(url);

        console.log(url);

        text = "A friend wants you to join their Meal-Mates meal-share group. Follow the link if you'd like to join.";

        text = text + "\n\n" + url;



        $("#message").text("Sending E-mail...Please wait");
        $.get("/send", { to: to, subject: subject, text: text }, function(data) {
            if (data == "sent") {
                $("#message").empty().html("An invite has been sent to " + to + "!");
            }

        });
    });
});