require("dotenv").config();
const express = require("express");
const configViewEngin = require('./config/viewEngine')
const webRoutes = require('./routes/web');
const connection = require('./config/database');

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config template
configViewEngin(app);

//khai bao route
app.use('/' , webRoutes);

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
