module.exports = function(sequelize, DataTypes) {

    var User = sequelize.define("User", {
        firstName: {
            type: DataTypes.STRING
        },
        lastName: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [6, 12]
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1],
            unique: true,
            validate: {
                isEmail: true
            }
        },
        phoneNumber: {
            type: DataTypes.STRING
        },
        foodAllergies: {
            type: DataTypes.TEXT
        },
        dietaryRestrictions: {
            type: DataTypes.TEXT
        },
        admin: {
            type: DataTypes.BOOLEAN
        },
       
    });

    // Associations
    User.associate = function(models) {
        // associates User with Group
        User.belongsTo(models.Lunchgroup, {targetKey: "id"});

        User.hasMany(models.Eventdate, {
            onDelete: "cascade"
        });
    }

    return User;

};