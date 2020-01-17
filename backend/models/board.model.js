var db = require('../api/db');

const baseSchema = new db.Schema({
	boardTitle: String,
	boardType: String,
	colloborators: Array,
	lists: Array,
	bk_url: String,
	starred: Array,
	recently: Array,
	user: { type:db.Schema.Types.ObjectId, ref: "users" }
});

const Base = new db.model('base', baseSchema);

const insertNewData = (data, userId) => {
	const newD = new Base(data);
	newD.save((err) => {
		if(err) return handleError(err);
		newD.user = userId;
	})
}



module.exports = { Base };