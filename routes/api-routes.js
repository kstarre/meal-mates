// Routes =============================================================
var db = require("../models/index.js");

module.exports = function(app) {

    //==============GETS==================================


    //get a single user from the user db by id number
    app.get("/viewprofile/userid/:id", function(req, res) {

        console.log(req.body);

        db.User.findAll({
                where: {
                    id: req.params.id,
                }
            })
            .then(function(data) {
                var dataObj = { user: data };
                console.log(dataObj);
                res.json(dataObj);
            });
    });

    // get a single user from db by email. may need for logging in.
    app.get("/viewprofile/useremail/:email", function(req, res) {

        console.log(req.body);

        db.User.findAll({
                where: {
                    email: req.params.email,
                }
            })
            .then(function(data) {
                var dataObj = { user: data };
                console.log(dataObj);
                res.json(dataObj);
            });
    });


    // route to get group data
    app.get("/viewgroup/group/:id", function(req, res) {

        console.log(req.body);

        db.Lunchgroup.findAll({
                where: {
                    id: req.params.id,
                }
            })
            .then(function(data) {
                var dataObj = { group: data };
                console.log(dataObj);
                res.json(dataObj);
            });
    });

    // get events by group number
    app.get("/viewcalendar/groupId/:id", function(req, res) {

        console.log(req.body);

        db.Lunchgroup.findAll({
                where: {
                    id: req.params.id
                }
            })
            .then(function(data) {
                var dataObj = { user: data };
                console.log(dataObj);
                res.json(dataObj);
            });
    });



    //get all dates by a specific group
    app.get("/calendar/:groupId", function(req, res) {

        db.Eventdate.findAll({
            where: {
                LunchgroupId: req.params.groupId
            }
        }).then(function(data) {

            res.json(data);

        }).catch(function(error) {

            res.send(error);
        });
    });


//GET group info
app.get("/getgroup", function(req, res) {

        db.Lunchgroup.findAll({

                 where: {
                id: req.params.id
            }

            }).then(function(data) {

                res.json(data);
            }).catch(function(error) {

                res.send(error);
            })
          
    });


    //===============Posts============================

    //post for making a new group
    app.post("/creategroup", function(req, res) {

        db.Lunchgroup.create({
                groupName: req.body.groupName,
                groupSize: req.body.groupSize,
                admin: req.body.admin,
                groupRules: req.body.groupRules
            })
            .then(function(dbLunchGroups) {

                db.User.findOne({
                    where: {
                        id: req.body.UserId
                    }

                })

            }).then(function(data) {

                res.json(data);

            }).catch(function(data) {

                res.send(error);
            });



    });






    //create a date
    app.post("/newevent", function(req, res) {

        console.log("\n\nLook Here!!!");
        console.log(req.body);
                console.log("\nLook Here!!!\n\n");


        db.Eventdate.create({


            date: req.body.date

        }).then(function(dbevent) {

            res.json(dbevent)
        }).catch(function(error) {
            res.send(error);
        });
    });

    //move a date 


}