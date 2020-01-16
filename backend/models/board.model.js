var db = require('../api/db');
const baseSchema = new db.Schema({
	id: Schema.Types.ObjectId,
	boardTitle: String,
	boardType: String,
	colloborators: Array,
	lists: Array,
	bk_url: String
});

const starSchema = new db.Schema({
	starred: Array
})

const recentlySchema = new db.Schema({
	recently: Array
})

const Base = new db.model('base', baseSchema);
const Star = new db.model('star', starSchema);
const Recently = new db.model('recently', recentlySchema);

const saveBase = (data) => {
	Base.create(data, (err, result) => {
		if(err) return handleError(err);
	})
}