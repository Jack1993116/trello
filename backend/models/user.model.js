var db = require('../api/db');
var userSchema = new db.Schema({
	id: db.Schema.Types.ObjectId,
	name: String,
	password: String,
	email: String
});

var users = new db.model("users", userSchema);
const insertUser = (user) => {
	users.insertMany(user, (err, result) => {
		if(err) {
			console.log(err);
		} else {
			console.log(result);
			return result;
		}
	})
}
const findUser = (user) => {
	const res = users.find(user).exec();
	return res;
}

module.exports = { insertUser, findUser };