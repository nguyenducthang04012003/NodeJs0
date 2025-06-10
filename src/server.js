require("dotenv").config();
const express = require("express");
const configViewEngin = require('./config/viewEngine')
const webRoutes = require('./routes/web');

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

configViewEngin(app);

//khai bao route
app.use('/test' , webRoutes)

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
