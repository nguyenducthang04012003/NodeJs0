const path = require('path');
const express = require('express');

const configViewEngin = (app) => {
  app.set("views", path.join('./src', "views")); //c1
  app.set("view engine", "ejs");
  app.use(express.static(path.join(__dirname, '../', "public"))); //c2
}

module.exports = configViewEngin;