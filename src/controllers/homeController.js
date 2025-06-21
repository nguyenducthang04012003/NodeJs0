const connection = require("../config/database");
const { use } = require("../routes/web");

const getHomePage = (req, res) => {
  return res.render('home.ejs')
};

const getHoiIt = (req, res) => {
  res.render("sample.ejs");
};

const postCreateuser = (req, res) => {
  console.log("req.body", req.body)
  res.send("created a user");
}

module.exports = {
  getHomePage,
  getHoiIt,
  postCreateuser,
};
