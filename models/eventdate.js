module.exports = function(sequelize, DataType) {
	var Eventdate = sequelize.define("Eventdate", {

		date: {
			type: DataType.STRING,
			isDate: true
		}
	});

	//Associations
	Eventdate.associate = function(models) {
	console.log("associate eventdate has many users")
	console.log(typeof models.Users);		
	// assoicates Eventdate with User
		Eventdate.hasMany(models.Users);
	};

	Eventdate.associate = function(models) {
	console.log("associate eventdate has many lunchgroups")
	console.log(typeof models.Lunchgroups);		
	// assoicates Eventdate with Lunchgroup
		Eventdate.hasMany(models.Lunchgroups);
	};

	return Eventdate
};