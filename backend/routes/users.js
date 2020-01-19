var express = require('express');
var router = express.Router();
var passport = require('passport');
var jwt = require('jsonwebtoken');

var {insertUser}  = require('../models/user.model');

/* GET users listing. */
router.post('/', passport.authenticate('login'), 
	(req, res, next) => {
		const payload = { email: req.user.email, password:req.user.password };
		console.log(payload);
		const token = jwt.sign(
			payload, 
			"abc", 
			{
				expiresIn: 31556926
			}, 
			(err, token) => {
				res.json({token: 'Bearer' + token});
			})
});

module.exports = router;
