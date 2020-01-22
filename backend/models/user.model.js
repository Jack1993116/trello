var db = require('../api/db');
var { Base, Item } = require('./board.model');

var userSchema = new db.Schema({
    name: String,
    password: String,
    email: String,
    starred: Array,
    recently: Array,
});

var User = new db.model("users", userSchema);

const insertUser = (user) => {
    let user1 = new User(user);
    user1.save((err) => {
        if (err) {
            console.log(err);
        } else {
            let base = new Base({
                boardTitle: "Team",
                boardType: "Private",
                colloborators: [],
                bk_url: "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/1367x2048/e3f86fba993a9f7bf2ab03234b25a022/photo-1568313081041-dbd174f69e3b",
            });
            let item = new Item({
                title: "ToDo",
                items: [],
            });
            base.user = user1._id;
            base.lists = item._id;
            item.save((err) => {
                if(err) return handleError(err);
            });
            base.save((err) => {
                if(err) return handleError(err);
            });
        }
    });
}

const findUser = (user) => {

    const res = User.findOne(user).exec();
    return res;
}

const updateUserDBInfo = (userEmail, board) => {
	User.updateOne({email: userEmail}, { board: 1 }, (err, result) => {
		if(err) {
			console.log(err);
		} else {
			return result;
		}
	})
}

module.exports = { insertUser, findUser };