module.exports = function(sequelize, DataType) {
	var User = sequelize.define("User", {
		firstName: {
			type: DataType.STRING,
			validate: {
				len: [1]
			}
		},
		lastName: {
			type: DataType.STRING,
			validate: {
				len: [1]
			}
		},
		password: {
			type: DataType.STRING,
			allowNull: false,
			len: [6,12]
		},
		email: {
			type: DataType.STRING,
			allowNull: false,
			len: [1],
			unique: true,
			validate: {
				isEmail: true
			}
		},
		phoneNumber: {
			type: DataType.STRING,
			len: [11]
		},
		foodAllergies: {
			type: DataType.TEXT
		},
		dietaryRestrictions: {
			type: DataType.TEXT
		},
		admin: {
			type: DataType.BOOLEAN
		}
	});

	// // Associations
	// User.associate = function(models) {
	// 	// associates User with Group
	// 	User.belongsTo(models.Lunchgroup);
	// }

	return User;
};