const path = require("path");
const db = require("../models");

module.exports = {
	// HTML Routes
	home: function(req, res) {
		res.sendFile(path.join(__dirname, "../public/index.html"));
	},
	viewProfile: function(req, res) {
		res.sendFile(path.join(__dirname, "../public/viewprofile.html"));
	},
	editProfile: function(req, res) {
		res.sendFile(path.join(__dirname, "../public/editprofile.html"));
	},
	welcome: function(req, res) {
		res.sendFile(path.join(__dirname, "../public/welcome.html"));
	},
	viewOtherProfile: function(req, res) {
		res.sendFile(path.join(__dirname, "../public/viewotheruser.html"));
	},

	// API Routes
	isLoggedIn: function(req, res, next) {
		if ( req.isAuthenticated() ) {
			return next();
		}
		res.redirect("/");
	},
	isAdmin: function(req, res, next) {
		if (req.user.admin) {
			return next();
		}
		res.redirect("/");
	},
	logout: function(req, res) {
		req.session.destroy(function(err) {
			res.redirect("/");
		})
	},
	getUserInfo: function(req, res) {
		db.User.findOne({
			where: {
				id: req.user.id
			}
		}).then( results => {
			res.json(results);
		});
	},
	updateUserInfo: function(req, res) {
		if (Object.keys(req.body).length === 0 && req.body.constructor === Object) {
			db.User.update({
				LunchgroupId: null
			}, {
				where: {
					id: req.user.id
				}
			}).then(function(results) {
				res.json(results);
			})
		}
		else {
			db.User.update(req.body, {
				where: {
					id: req.user.id
				}
			}).then(function(results) {
				res.json(results);
			});
		}
	},
	deleteUser: function(req, res) {
		db.User.destroy({
			where: {
				id: req.user.id
			}
		}).then(function(results) {
			res.json(results);
		});
	},
	getOtherUser: function(req, res) {
		db.User.findOne({
			where: {
				id: req.params.userId
			}
		}).then( results => {
			res.json(results);
		});
	},
    uploadImage: function(req, res) {
        message = '';
        if (req.method == "POST") {
            var post = req.body;
            var name = post.user_name;
            var pass = post.password;
            var fname = post.first_name;
            var lname = post.last_name;
            var mob = post.mob_no;

            if (!req.files)
                return res.status(400).send('No files were uploaded.');

            var file = req.files.uploaded_image;
            var img_name = file.name;

            console.log(file.mimetype);

            if (file.mimetype == "image/jpeg" || file.mimetype == "image/png" || file.mimetype == "image/gif") {
                console.log(__dirname + '/../public/img/images/upload_images/');

                file.mv(__dirname + '/../public/img/images/upload_images/' + file.name, function(err) {

                    if (err) 

                        return res.status(500).send(err);
                        
                    db.User.update({
                        imageLink: img_name

                    }, {
                        where: {
                            id: req.user.id
                        }
                    }).then(function(results) {

                        res.redirect("/editprofile");
                    })

                });
                

            } else {
                message = "This format is not allowed , please upload file with '.png','.gif','.jpg'";
                // res.render('index.ejs', { message: message });
                console.log("message");
                console.log(message);
            }
        }
    else {
        // res.render('index');
        console.log("ELSE")
    }
    }
};