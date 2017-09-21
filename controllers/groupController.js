module.exports = {

    // put admin/edit group route
    groupEdit = function(req, res) {

        db.Post.update(req.body, {
                where: {
                    id: req.body.id
                }
            })
            .then(function(data) {
                res.json(data);
            });
    });
},

// group query saving
groupSave = function(req, res) {

}

// delete group
groupDelete = function(req, res) {
        res.session.destroy(function(err) {
            res.redirect("/");
        });
    },

    // calendar route
    calendar = function() {

    }

//find a group by id
groupFind = function(req, res) {

    db.Lunchgroup.findAll({

        where: {
            id: req.params.id
        }

    }).then(function(data) {

        res.json(data);
    }).catch(function(error) {

        res.send(error);
    })

}

};

/*app.get("/getgroup", function(req, res) {

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
*/