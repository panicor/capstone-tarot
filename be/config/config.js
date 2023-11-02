
/** Shared config for application; can be required many places. */

require("dotenv").config();
require("colors");

const SECRET_KEY = process.env.SECRET_KEY || "secret-dev";

const PORT = +process.env.PORT || 3001;

// Use dev database, testing database, or via env var, production database
function getDatabaseUri() {
  return (process.env.NODE_ENV === "test")
      ? "tarot_db_test"
      : process.env.DATABASE_URL || "tarot_db";
}

const hostname = process.env.HOSTNAME;

console.log("Tarot Config:".green);
console.log("SECRET_KEY:".yellow, SECRET_KEY);
console.log("PORT:".yellow, PORT.toString());
console.log("Database:".yellow, getDatabaseUri());
console.log("---");
console.log(hostname);

module.exports = {
  SECRET_KEY,
  PORT,
  getDatabaseUri
};
