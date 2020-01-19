var db = require('../api/db');

const baseSchema = new db.Schema({
	boardTitle: String,
	boardType: String,
	colloborators: Array,
	lists: Array,
	bk_url: String
});

const Base = new db.model('base', baseSchema);

const insertNewData = (data) => {
	const newD = new Base(data);
	newD.save((err) => {
		if(err) return handleError(err);
	})
	return newD._id;
}



module.exports = { Base };