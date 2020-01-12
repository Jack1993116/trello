var express = require('express');
var router = express.Router();
var passport = require('passport');

router.post('/', passport.authenticate('register'), (req, res) => {
	console.log("Register");
	res.send("http://localhost:3001/main");
} )

module.exports = router;