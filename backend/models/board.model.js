var db = require('../api/db');

const listSchema = new db.Schema({
	title: String,
	items: Array
});

const baseSchema = new db.Schema({
	user: {type: db.Schema.Types.ObjectId, ref: "users"},
	boardTitle: String,
	boardType: String,
	colloborators: Array,
	lists: {type: db.Schema.Types.ObjectId, ref: "list"},
	bk_url: String
});

const Base = new db.model('base', baseSchema);
const Item = new db.model('list', listSchema);

const insertNewData = (data) => {
	const newD = new Base(data.base);
	const newL = new Item(data.list);
	newD.save((err) => {
		if(err) return handleError(err);
		newD.lists.push(newL._id);
	})
	return newD._id;
}

module.exports = { Base, Item };