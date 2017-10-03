module.exports = function(sequelize, DataType) {
	var Invitation = sequelize.define("Invitation", {
		inviteCode : {
			type: DataType.STRING,
			allowNull: false
		},
		expires : {
			type: DataType.DATE,
			isDate: true
		}

	});

	Invitation.associate = function(models) {

		Invitation.belongsTo(models.Lunchgroup, {
			targetKey: "id"
		});
	};

	return Invitation;

};