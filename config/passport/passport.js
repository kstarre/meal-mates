//load bcrypt
var bCrypt = require('bcrypt-nodejs');


module.exports = function(passport, user) {
    var User = user;
    var LocalStrategy = require('passport-local').Strategy;

    //serialize
    passport.serializeUser(function(user, done) {
        done(null, user.id);

    });

    // deserialize user which saves user id to session
    passport.deserializeUser(function(id, done) {
        User.findById(id).then(function(user) {
            if (user) {
                done(null, user.get());
            } else {
                done(user.errors, null);
            }
        });
    });

    passport.use('local-signup', new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },

        //hashed password generating function inside the callback function
        function(req, username, password, done) {
            var generateHash = function(password) {
                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
            };

            //ensuring username isn't already taken 
            User.findOne({
                where: {
                    username : username
                }
            }).then(function(user) {
                if (user)
                {
                    return done(null, false, {
                        message: 'That username is already taken'
                    });
                } 
                else {
                    var userPassword = generateHash(password);
                    var data =
                        {
                            username: username,
                            password: userPassword,
                            name: req.body.name,
                        };
                    
                  // Sequelize method for adding new entries to the database
                    User.create(data).then(function(newUser, created) {
                        if (!newUser) {
                            return done(null, false);
                        }
                        if (newUser) {
                            return done(null, newUser);
                        }
                    });
                }
            });
        }
    ));

    //LOCAL SIGNIN
    passport.use('local-signin', new LocalStrategy(
    {
        // by default, local strategy uses username and password
        usernameField: 'username', 
        passwordField: 'password', 
        passReqToCallback: true // allows us to pass back the entire request to the callback 
    },
    function(req, username, password, done) {
        var User = user;
        var isValidPassword = function(userpass, password) {
            return bCrypt.compareSync(password, userpass);
        }
        User.findOne({
            where: {
                username: username
            }
        }).then(function(user) {
            if (!user) {
                return done(null, false, {
                    message: 'account does not exist'
                });
            }
            if (!isValidPassword(user.password, password)) {
                return done(null, false, {
                    message: 'Incorrect password.'
                });
            }
            var userinfo = user.get();
            return done(null, userinfo);
            
        }).catch(function(err) {
            console.log("Error:", err);
            return done(null, false, {
                message: 'Something went wrong with your Signin'
            });
        });
    }
));
};