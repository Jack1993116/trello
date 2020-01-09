var db = require('../api/db');
var userSchema = db.Schema({
	name: String,
	password: String,
	email: String
});

var users = db.model("users", userSchema);

const insertUser = (user) => {
	users.insert(user, (err, result) => {
		if(err) {
			console.log(err);
		} else {
			console.log(result);
		}
	})
}

const findUser = (user) => {
	const res = users.find(user).exec();
	return res;
}

module.exports = { insertUser, findUser };