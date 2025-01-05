const pgp = require("pg-promise")();

const db = pgp({
	user: 'admin',
	password: 'admin',
	host: 'localhost',
	port: 5432,
	database: 'api_rest'
});

module.exports = db;