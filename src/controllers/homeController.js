const { render } = require("ejs");
const connection = require("../config/database");
const {getAllUsers} = require("../services/CRUDService");

const getHomePage = async (req, res) => {
  const results = await getAllUsers();
  return res.render("home.ejs", { data: results});
};

const getHoiIt = (req, res) => {
  res.render("sample.ejs");
};

const postCreateuser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;
  // let { email, name, city } = req.body;

  const [results, fields] = await connection.query(
    `INSERT INTO users  (email, name, city)
    VALUES (?, ?, ?)`,
    [email, name, city]
  );
  res.send("Tạo user thành công");
};

const getCreatePage = (req, res) => {
  res.render("create.ejs");
};

module.exports = {
  getHomePage,
  getHoiIt,
  postCreateuser,
  getCreatePage,
};
