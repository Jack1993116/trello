var db = require('mongoose');

db.connect('mongodb://127.0.0.1:27017/trello', { useNewUrlParser: true });

module.exports = db;