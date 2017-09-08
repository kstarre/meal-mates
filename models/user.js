const bcrypt = require('bcryptjs');

module.exports = function(sequelize, DataType) {
	var User = sequelize.define("User", {
		firstName: {
			type: DataType.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		lastName: {
			type: DataType.STRING,
			allowNull: false,
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
			type: DataType.INTEGER,
			allowNull: false,
			len: [10]
		},
		foodAllergies: {
			type: DataType.TEXT
		},
		dietaryRestrictions: {
			type: DataType.TEXT
		},
		admin: {
			type: DataType.BOOLEAN,
			allowNull: true
		}
	});

	// Associations
	User.associate = function(models) {
		// associates User with Group
		User.belongsTo(models.Groups);
	};

	// Creates Secure Password with bcryptjs
	User.hashPassword = (userPassword) => {
		let salt = bcrypt.genSaltSync(10);
		let hashedPassword = bcrypt.hasSync(userPassword, salt);

		return hashedPassword;
	}

	// Check entered password with db, return boolean
	User.checkPassword = (enteredPassword, dbHash) => {

		return bcrypt.compareSync(enteredPassword, dbHash);
	}

	return User;
};