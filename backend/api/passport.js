const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const {findUser, insertUser} = require('../models/user.model');

var opt = {};
opt.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opt.secretOrKey = "abc";

passport.use('register', new LocalStrategy({
		usernameField: 'payload',
		passwordField: 'type',
		session: false
	}, 
	async (username, password, done) => {
		console.log(username);
		let user = await findUser();
		if(user === "error"){
			done(user, false);
		}
		if(user.length !== 0){
			done(null, false, "user");
		}
		// insertUser(jwt_payload)
		done(null, true);
	}))

passport.use('login', 
	new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		session: false
	}, async (username, password, done) => {
		try{
			let user = await findUser();
			console.log("DB:"+user);
			if(user === "error"){
				done(user, false);
			}
			if(user.length === 0){
				done(null, false, "user");
			}
			done(null, user);
		} catch (err) {
			console.log(err);
			done(err, false);
		}
	})
);

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

// passport.deserializeUser(function(id, cb) {
//   db.users.findById(id, function (err, user) {
//     if (err) { return cb(err); }
//     cb(null, user);
//   });
// });

module.exports = passport;
