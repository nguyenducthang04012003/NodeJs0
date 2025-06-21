const connection = require("../config/database");
const { use } = require("../routes/web");

const getHomePage = (req, res) => {
  return res.render('home.ejs')
};

const getHoiIt = (req, res) => {
  res.render("sample.ejs");
};

const postCreateuser = (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;
  // let { email, name, city } = req.body;

  connection.query(
    `INSERT INTO users  (email, name, city)
    VALUES (?, ?, ?)`,
    [email, name, city],
    function (err, results) {
      if (err) {
        console.error('Lỗi khi thêm user:', err);
        return res.status(500).send('Lỗi server khi tạo user');
      }

      console.log('Kết quả:', results);
      res.send('Tạo user thành công');
    }
  );
};

module.exports = {
  getHomePage,
  getHoiIt,
  postCreateuser,
};
