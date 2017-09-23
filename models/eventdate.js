// export player sequelizer
module.exports = function(sequelize, DataTypes) {


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

       
    };
    return Eventdate;
};




