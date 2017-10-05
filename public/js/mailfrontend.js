$(document).ready(function() {

    var groupId;
    var url = window.location.href;
    url = url.split("group");
    url = url[0];
    var from, to, subject, text;
    var inviteCode;

    generateCode();
    getID();
    $("#send_email").on("click", sendEmail);

    function getID() {
        $.get("/api/user", function(data) {
            groupId = data.LunchgroupId;
        })
    }

    function generateCode() {
        inviteCode = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 7; i++) {
            inviteCode += possible.charAt(Math.floor(Math.random() * possible.length));
        }
    }

    function sendEmail() {
        to = $("#to").val();

        subject = "You've received an invitation to join Meal-Mates";

        url = url + "group/invite/" + groupId + "/" + inviteCode;

        text = "A friend wants you to join their Meal-Mates meal-share group. Follow the link if you'd like to join.";

        text = text + "\n\n" + url;


        $("#message").text("Sending E-mail...Please wait");
        $.get("/send", { to: to, subject: subject, text: text }, function(data) {
            if (data == "sent") {
                $("#message").empty().html("An invite has been sent to " + to + "!");
                saveInvite();
            }
        });
    }

    function saveInvite() {
        // add expiration date for token
        var inviteData = {
            inviteCode: inviteCode
        };
        $.post("/api/invite/new", inviteData, function() {

        });
    }
});