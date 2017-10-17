let nodemailer = require('nodemailer');
require('dotenv').config();

module.exports = {
	send: function(req, res) {
		var smtpTransport = nodemailer.createTransport({
		    service: "hotmail",
		    // host: "smtp.gmail.com",
		    auth: {
		        user: "mealmates@hotmail.com",
		        pass: process.env.HPASS
		    }
		});

		//code to send e-mail.
		var mailOptions = {
		    to: req.query.to,
		    subject: req.query.subject,
		    text: req.query.text
		};
		//console.log(mailOptions);
		smtpTransport.sendMail(mailOptions, function(error, response) {
		    if (error) {
		        console.log(error);
		        res.end("error");
		    } else {
		        console.log("Message sent: " + response.message);
		        res.end("sent");
		    }
		});
	}
};