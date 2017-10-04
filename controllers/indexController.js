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

    // API Routes
    isLoggedIn: function(req, res, next) {
        if (req.isAuthenticated()) {
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
        }).then(results => {
            res.json(results);
        });
    },
    updateUserInfo: function(req, res) {
        db.User.update(
            req.body, {
                where: {
                    id: req.user.id
                }
            }).then(function(results) {
            res.json(results);
        });
    },
    deleteUser: function(req, res) {
        db.User.destroy({
            where: {
                id: req.user.id
            }
        }).then(function(results) {
            res.json(results);
        });
    }

    getUserImage: function(req, res) {
        console.log("EXPORTS.PROFILE!");
        var message = '';
        var id = req.params.id;
        var sql = "SELECT * FROM `users` WHERE `id`=?", [id];
        db.query(sql, function(err, result) {
            if (result.length <= 0)
                message = "Profile not found!";

            res.render('viewprofileEJS.ejs', { data: result, message: message });
        });
    },

    postUserImage: function(req, res) {

    	console.log("EXPORTS.INDEX");
    message = '';
   if(req.method == "POST"){
    
    if (!req.files)
        return res.status(400).send('No files were uploaded.');

    var file = req.files.uploaded_image;
    var img_name=file.name;

       if(file.mimetype == "image/jpeg" ||file.mimetype == "image/png"||file.mimetype == "image/gif" ){
                                 
              file.mv('img/images/upload_images/'+file.name, function(err) {
                             
                if (err)

                  return res.status(500).send(err);
                var sql = "INSERT INTO `users`(`image`) VALUES (?)", [image];

                var query = db.query(sql, function(err, result) {
                   res.redirect('profile/'+result.insertId);
                });
             });
          } else {
            message = "This format is not allowed , please upload file with '.png','.gif','.jpg'";
            res.render('editprofileEJS.ejs',{message: message});
          }
   } else {
      res.render('editprofileEJS.ejs');
   }
    }
};