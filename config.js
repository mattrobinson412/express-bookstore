/** Common config for bookstore. */

require("dotenv").config();

const DB_URI = (process.env.NODE_ENV === "test")
  ? "postgresql://postgres:myPassword@localhost:5432/bookstore_test"
  : "postgresql://postgres:myPassword@localhost:5432/bookstore";

const SECRET_KEY = process.env.SECRET_KEY || "secret";

const BCRYPT_WORK_FACTOR = 12;

module.exports = { 
  DB_URI,
  SECRET_KEY,
  BCRYPT_WORK_FACTOR 
};