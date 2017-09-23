let nodemailer = require('nodemailer');
require('dotenv').config();



module.exports = function(app) {


//==== 
app.get('/tempName', function(req, res) {
    res.sendfile('./public/mailindex.html');
});

app.get('/send', function(req, res) {
    //code to send e-mail.
    //Will be shown soon.
    var mailOptions = {
        to: req.query.to,
        subject: req.query.subject,
        text: req.query.text
    }
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(error, response) {
        if (error) {
            console.log(error);
            res.end("error");
        } else {
            console.log("Message sent: " + response.message);
            res.end("sent");
        }
    });
});


//==== gmail info for our group ======//
var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: "mealmatesapp@gmail.com",
        pass: process.env.GPASS
    }
});

}