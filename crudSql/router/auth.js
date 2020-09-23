var auth = require("express").Router();
var bcrypt = require("bcryptjs");
const { connection } = require("../database/db");

// bcrypt
var salt = bcrypt.genSaltSync(10);
var hash = (pass) => bcrypt.hashSync(pass, salt);

auth.post("/auth", (req, res) => {
  var user = [req.body.name, req.body.email, hash(req.body.password)];
  //   console.log(user);
  console.log(user[2]);
  var sql = "INSERT into signup (name, email, password) VALUES (?, ?, ?)";
  connection.query(sql, user, (err, data) => {
    if (err) throw err;
    console.log({ data });
    // callback(null, data);
  });
  connection.end();
  res.send(user);
});

auth.get("/login", async (req, res) => {
  var user = req.body;
  console.log(user);
  let sql = "SELECT password FROM signup WHERE name = " + '"' + user.name + '"';
  await connection.query(sql, (err, data) => {
    if (err) throw err;
    console.log(Object.values(data[0])[0]);
    var result = bcrypt.compareSync(user.password, hash(user.password));
    console.log(result);
    res.end("login succes");
  });
  connection.end();
});

module.exports = auth;
