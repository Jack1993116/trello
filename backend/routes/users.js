var express = require('express');
var router = express.Router();
var passport = require('passport');
var {insertUser}  = require('../models/user.model');


/* GET users listing. */
router.post('/', //passport.authenticate('login'), 
	(req, res, next) => {
	insertUser({name: "N", password:"P", email:"E"});
		// console.log(req);
		// res.redirect('/main');
});

module.exports = router;
