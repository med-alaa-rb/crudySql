var crudy = require("express").Router();
var db = require("../database/db")

crudy.get("/post", (req, res) => {
  db.getAll((err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

crudy.post("/post", (req, res) => {
  var name = req.body.name;
  //console.log(e);
  db.deleteRow((err, name) => {
    if (err) throw err;
    //console.log(e);
    res.end();
  });
});

crudy.post("/up", (req, res) => {
  var e = req.body;
  console.log(e);
  db.updateRow((err, data) => {
    if (err) throw err;
    console.log("update done");
  });
});

module.exports = crudy;
