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
    // user: "testing1",
    port: 5432,
    // password: "testingpassword1",
    database: "tarot_db"
  });
}

db.connect();

module.exports = db;