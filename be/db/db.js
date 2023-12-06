const { Client } = require("pg");
const { getDatabaseUri } = require("../config/config");

let db;

if (process.env.NODE_ENV === "production") {
  db = new Client({
    connectionString: getDatabaseUri(),
    ssl: {
      rejectUnauthorized: false,
    },
  });
} else {
  db = new Client({
    host: "localhost",
    port: 5432,
    database: "tarot_db"
  });
}


//connect to db
db.connect();

module.exports = db;