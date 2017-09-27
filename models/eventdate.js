// export player sequelizer
module.exports = function(sequelize, DataType) {
    var Eventdate = sequelize.define("Eventdate", {
        title: {
            type: DataType.STRING
        },
        start: {
            type: DataType.DATEONLY,
            isDate: true
        },
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




