const getHomePage = (req, res) => {
  res.send("Hello World! qq nha");
};

const getHoiIt = (req, res) => {
  res.render("sample.ejs");
}

module.exports = {
  getHomePage,
  getHoiIt
}