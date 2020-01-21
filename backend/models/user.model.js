var db = require('../api/db');
var Base = require('./board.model');

var userSchema = new db.Schema({
    name: String,
    password: String,
    email: String,
    starred: Array,
    recently: Array,
});

var users = new db.model("users", userSchema);

const insertUser = (user) => {
    users.insertMany(user, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            return result;
        }
    })
}

const findUser = (user) => {
    const res = users.findOne({ email: user }).exec();
    return res;
}

const updateUserDBInfo = (userEmail, board) => {
	users.updateOne({email: userEmail}, { board: 1 }, (err, result) => {
		if(err) {
			console.log(err);
		} else {
			return result;
		}
	})
}

module.exports = { insertUser, findUser };