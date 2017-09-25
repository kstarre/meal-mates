$(document).ready(function(){


    var from,to,subject,text;
    $("#send_email").click(function(){      
        to=$("#to").val();

        subject="You've received an invitation to join Meal-Mates";

        text="A friend wants you to join their Meal-Mates meal-share group. Follow the link if you'd like to join";

        $("#message").text("Sending E-mail...Please wait");
        $.get("http://localhost:3000/send",{to:to,subject:subject,text:text},function(data){
        if(data=="sent")
        {
            $("#message").empty().html("Email is been sent at "+to+" !");
        }

});
    });
});

