// export player sequelizer
module.exports = function(sequelize, DataTypes) {

<<<<<<< HEAD
	
=======
>>>>>>> 6cb9942098ae20e5763bb053108dc77720746250
    var Eventdate = sequelize.define("Eventdate", {

        date: {
            type: DataTypes.DATEONLY,
            isDate: true
        }
    });

    Eventdate.associate = function(models) {

        Eventdate.belongsTo(models.User, {
            targetKey: "id"
        });

        Eventdate.belongsTo(models.Lunchgroup, {
            targetKey: "id"
        });
<<<<<<< HEAD

       
    };
    return Eventdate;
};



=======
    };
    return Eventdate;
};
>>>>>>> 6cb9942098ae20e5763bb053108dc77720746250
