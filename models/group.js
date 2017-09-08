module.exports = function(sequelize, DataType) {
	var Group = sequelize.define("Group", {
		groupName: {
			type: DataType.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		groupSize: {
			type: DataType.INTEGER,
			allowNull: false
		},
		admin: {
			type: DataType.STRING,
			allowNull: false,
			len: [1]
		}
		groupRules: {
			type: DataType.TEXT
		}
	});

	//Associations
	Group.associate = function(models) {
		// assoicates Group with User
		Group.hasMany(models.Users);
	};

	return Group;
};