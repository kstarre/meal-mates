// export player sequelizer
module.exports = function(sequelize, DataTypes) {

	console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
	console.log(sequelize)
	console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
    var Eventdate = sequelize.define("Eventdate", {

        date: {
            type: DataTypes.STRING,
            isDate: true
        }
    });



    Eventdate.associate = function(models) {
        console.log("LOOOOOOOOOOOOOOOK HEEEEEEEEERRRRRRREEEEEEEEEEEE")

        Eventdate.belongsTo(models.User, {
            targetKey: "id"
        });

        Eventdate.belongsTo(models.Lunchgroup, {
            targetKey: "id"
        });

        //   Eventdate.belongsToMany (models.Team, {
        // through: "playTeam",
        // onDelete: "cascade"
        //   });
    };
    return Eventdate;
};



// module.exports = function(sequelize, DataType) {
//     var Eventdate = sequelize.define("Eventdate", {

//         date: {
//             type: DataType.STRING,
//             isDate: true
//         }
//     });

//     //Associations
//     Eventdate.associate = function(models) {
//         console.log("associate eventdate has many users")
//         console.log(typeof models.Users);
//         // assoicate: Eventdate belongs to a User
//         Eventdate.belongsTo(models.Users);
//         Eventdate.belongsToMany(models.User, {
//             through: "userThrough",
//             onDelete: "cascade"
//         });

//         Eventdate.belongsToMany(models.Lunchgroup, {
//             through: "lunchThrough",
//             onDelete: "cascade"
//         });
//     };

//     // Eventdate.associate = function(models) {
//     // console.log("associate eventdate has many lunchgroups")
//     // console.log(typeof models.Lunchgroups);		
//     // // assoicate: Eventdate belongs to a Lunchgroup
//     // 	Eventdate.belongsTo(models.Lunchgroups);
//     // };

//     return Eventdate
// };


// module.exports = function(sequelize, DataType) {

// var Eventdate = sequelize.define('Eventdate', {
//     code: {
//       type: DataType.STRING,
//       isdate: true
//     }
//   }, {
//     classMethods: {
//       associate: function(models) {
//         Eventdate.belongsTo(models.User, {
//           foreignKey: 'userId',
//           onDelete: 'CASCADE'
//         });
//       }
//     }
//   });

// }

/*

    // var Eventdate = sequelize.define("eventdate", {

    //     date: {
    //         type: DataType.STRING,
    //         isDate: true
    //     }, {

    //     }

    // });
    // sequelize.eventdates.hasMany(models.Users);

    //Associations
    // Eventdate.associate = function(models) {
    //     console.log("associate eventdate has many users\n");
    //     console.log("==================================\n");
    //     console.log(models.Users);
    //     console.log(typeof models.Users + "\n");
    //     // assoicates Eventdate with User
    //     Eventdate.hasMany(models.Users);

    //     console.log("associate eventdate has many lunchgroups\n");
    //     console.log("==================================\n");
    //     console.log(models.Lunchgroups);
    //     console.log(typeof models.Lunchgroups);
    //     // assoicates Eventdate with Lunchgroup
    //     Eventdate.hasMany(models.Lunchgroups, {
    //         foreignKey: lunchGroupID
    //     });
    // };

    // Eventdate.associate = function(models) {
    // console.log("associate eventdate has many lunchgroups\n");
    // console.log("==================================\n");
    // console.log(models.Lunchgroups);
    // console.log(typeof models.Lunchgroups);		
    // // assoicates Eventdate with Lunchgroup
    // 	Eventdate.hasMany(models.Lunchgroups, {
    // 		foreignKey: lunchGroupID
    // 	});
    // };



    return Eventdate

*/

/*

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

			// Lunchgroup.belongsTo(User);


	//Associations
	Lunchgroup.associate = function(models) {
		console.log("\nLUNCHGROUP ASSOCIATE!!!!\n")
	console.log(typeof models.User);		
	// assoicate: Group has multple User
		Lunchgroup.masMany(models.User);
	};

	Lunchgroup.associate = function(models) {
	console.log(typeof models.Eventdate);		
	// assoicates Group has multpile Eventdate
		Lunchgroup.hasMany(models.Eventdate);
	};

	return Lunchgroup;
};

*/

// export player sequelizer
// module.exports = function(sequelize, DataTypes) {

//     var Eventdate = sequelize.define("Eventdate", {

//         date: {
// 			type: DataTypes.STRING,
// 			isDate: true
// 		}

//     });

//     Eventdate.associate = function(models) {
//         // Associating Game with Posts
//         // When an Author is deleted, also delete any associated Posts
//         Eventdate.belongsTo(models.User, {
//             as: "userId"
//         });

//          Eventdate.belongsTo(models.Lunchgroup, {
//             as: "eventId"
//         });

//      }

//     return Eventdate;
// };

// module.exports = function(sequelize, DataType) {
// 	var Eventdate = sequelize.define("Eventdate", {

// 		date: {
// 			type: DataType.STRING,
// 			isDate: true
// 		}, 
// 		{
// 			classMethods: {
//      			associate: function(models) {
//      				Eventdate.belongsTo(models.User);
//      				Eventdate.belongsTo(models.Lunchgroup);
//      			}
// 		},
// 	}
// 	});



// 	return Eventdate
// };

// 'use strict';
// module.exports = function(sequelize, DataTypes) {
//     // console.log("\n\n=================================\n");
//     // console.log(Sequelize.Model);
//     // console.log("\n=================================\n\n");

//     var Eventdate = sequelize.define('Eventdate', {
//         date: DataTypes.STRING
//     }, {
//         classMethods: {
//             associate: function(models) {

//                 console.log("\n\n=================================\n");
//                 console.log(models.User);
//                 console.log(models.Lunchgroup);
//                 console.log(models.Eventdate);

//                 console.log("\n=================================\n\n");


//                 Eventdate.belongsTo(models.User);
//                 Eventdate.belongsTo(models.Lunchgroup);
//             }
//         },
//         freezeTableName: true,
//         tableName: 'Eventdate',
//         timestamps: true
//     });
//     return Eventdate;
// };