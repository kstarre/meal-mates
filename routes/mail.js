let nodemailer = require('nodemailer');
let mailController = require('../controllers/mailController');
require('dotenv').config();



module.exports = function(app) {


//==== 

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
    service: "hotmail",
    // host: "smtp.gmail.com",
    auth: {
        user: "mealmates@hotmail.com",
        pass: "Kat13Megan"
    }
});

}