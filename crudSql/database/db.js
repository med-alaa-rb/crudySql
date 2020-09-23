var mysql = require("mysql");
// const dotenv = require("dotenv").config();
var mysqlConfig = require("./config.js");

var connection = mysql.createConnection(mysqlConfig);

connection.connect((err) => {
  if (err) {
    return console.error("error: " + err.message);
  }

  console.log("Connected to the MySQL server.");
});


var getAll = (callback) => {
  connection.query("SELECT * FROM user", (err, data) => {
    if (err) throw callback(err);
    console.log({ data });
    callback(null, data);
  });
  connection.end();
};
var deleteRow = () => {
  let sql = `DELETE FROM user WHERE name = ?`;
  connection.query(sql, "alaarb", (err, data) => {
    if (err) throw err;
    console.log("Deleted Row(s):", data);
  });
  connection.end();
};
let sql = `UPDATE user Set is_favorite = ? WHERE name = ?`;
var updateRow = () => {
  let data = [false, "alaa"];
  connection.query(sql, data, (err, results, fields) => {
    if (err) throw err;
    console.log("Rows affected:", results.affectedRows);
  });
  connection.end();
};

module.exports = { getAll, deleteRow, updateRow,connection };
