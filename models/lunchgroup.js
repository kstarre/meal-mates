module.exports = function(sequelize, DataType) {
	var Lunchgroup = sequelize.define("Lunchgroup", {
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
		},
		groupRules: {
			type: DataType.TEXT
		}
	});

	//Associations
	Lunchgroup.associate = function(models) {
	console.log(typeof models.User);		
	// assoicates Group with User
		Lunchgroup.hasMany(models.User);
	};

	Lunchgroup.associate = function(models) {
	console.log(typeof models.Eventdate);		
	// assoicates Group with Eventdate
		Lunchgroup.hasMany(models.Eventdate);
	};

	return Lunchgroup;
};