const express = require("express");
const app = express();

const person = require("./models/person");
const personlaptop = require("./models/personlaptop");


const bodyParser = require("body-parser");
app.use(bodyParser.json());
//databe connection
const db = require("./databse");

//get request
app.get("/", (req, res) => {
  res.send("Wellcome to FLAT 804");
});
///Routes exxport///////////
const PersonRouters = require('./Routers/PersonRouters');
const laptopsRouters = require('./Routers/laptopsRouter');
// use the routers///
app.use('/person', PersonRouters);
app.use('/personlaptop', personlaptop);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
