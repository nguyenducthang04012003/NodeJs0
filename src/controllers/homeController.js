const { render } = require("ejs");
const connection = require("../config/database");
const {
  getAllUsers,
  getUserById,
  postCreateUser,
  updateUserById,
} = require("../services/CRUDService");

const getHomePage = async (req, res) => {
  const results = await getAllUsers();
  return res.render("home.ejs", { data: results });
};

const getHoiIt = (req, res) => {
  res.render("sample.ejs");
};

const postCreatePage = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;
  // let { email, name, city } = req.body;
  await postCreateUser(email, name, city);
  // res.send("Tạo user thành công");
  res.redirect("/create");
};

const getCreatePage = (req, res) => {
  res.render("create.ejs");
};

const getUpdatePage = async (req, res) => {
  const userId = req.params.id;
  const user = await getUserById(userId);
  return res.render("edit.ejs", { userEdit: user });
};

const postUpdateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;
  let userId = req.body.userId;
  await updateUserById(email, name, city, userId);
  // res.send("Update user thành công");
  res.redirect('/');
};

module.exports = {
  getHomePage,
  getHoiIt,
  postCreatePage,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
};
