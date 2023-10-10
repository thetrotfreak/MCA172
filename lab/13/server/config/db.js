const process = require("process");
const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  user: process.env.MYSQL_U,
  password: process.env.MYSQL_P,
  database: "hotel",
});

module.exports = db;
