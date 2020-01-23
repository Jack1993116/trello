var express = require('express');
var router = express.Router();
var passport = require('passport');
var bcrypt = require('bcryptjs');

var { insertUser } = require('../models/user.model');
var { Data, Base, Star, Recently } = require('../models/board.model');
 
router.post('/', passport.authenticate('register'), 
	(req, res) => {
		bcrypt.genSalt(10, (err, salt) => {
			bcrypt.hash(req.user.password, salt, (err, hash) => {
				if(err) throw err;
				let usr = {email:req.user.email, password:hash};
				insertUser(usr);
			});
		});
		res.send(true);
} )

module.exports = router;