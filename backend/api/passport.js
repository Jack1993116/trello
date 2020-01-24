const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const bcrypt = require('bcryptjs');

const {findUser, insertUser} = require('../models/user.model');

var opt = {};
opt.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opt.secretOrKey = "abc";

passport.use('register', new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		session: false
	}, 
	async (username, password, done) => {
		let user = await findUser({username: username, password: password});

		if(user === "error"){
			done(user, false);
		}

		if(user != null){
			done(null, false, "user");
		}
		// done(null, false);
		done(null, {email: username, password: password});
	}))

passport.use('login', 
	new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		session: false
	}, async (username, password, done) => {
		try{
			let user = await findUser({email: username});
			console.log("DB:"+user);
			if(user === "error"){
				done(user, false);
			}
			if(user === null){
				done(null, false, "user");
			}
			console.log(await bcrypt.compare("req.user.password", user.password));
			// done(null, false);
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
