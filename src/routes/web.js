const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World! qq nha");
});

router.get("/hoidanit", (req, res) => {
  // res.send("<h1>Hello World!</h1>");
  res.render("sample.ejs");
});

module.exports = router;