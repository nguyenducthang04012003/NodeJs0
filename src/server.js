require("dotenv").config();
const mysql = require("mysql2");
const express = require("express");
const configViewEngin = require('./config/viewEngine')
const webRoutes = require('./routes/web');

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config template
configViewEngin(app);

//khai bao route
app.use('/' , webRoutes);

//test conection
const connection = mysql.createConnection({
  host: "localhost",
  port: 3307,
  user: "root",
  password: "123456",
  database: "hoidanit",
});

// execute will internally call prepare and query
connection.execute(
  "SELECT * FROM users u",
  ["Rick C-137", 53],
  function (err, results, fields) {
    console.log(".>>>>",results); // results contains rows returned by server
  }
);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
