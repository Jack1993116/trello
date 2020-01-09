var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET users listing. */
router.post('/', passport.authenticate('login'), 
	(req, res, next) => {
		console.log(req.user);
		res.send('respond with a resource');
});

module.exports = router;
