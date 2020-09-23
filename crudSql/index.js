const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const crudy = require("./router/sqlRouter");
const auth = require("./router/auth");

app.use(bodyParser.json());

app.use("/", crudy);

app.use("/", auth);

app.use(express.static("client/dist"));

const port = process.env.PORT || 3000;

app.listen(port, () => `app listen to http://localhost:${port}/`);
