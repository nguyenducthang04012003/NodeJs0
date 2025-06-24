const express = require("express");
const {
  getHomePage,
  getHoiIt,
  postCreateuser,
  getCreatePage,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomePage);
router.get("/hoidanit", getHoiIt);
router.get("/create", getCreatePage);
router.post("/create-user", postCreateuser);

module.exports = router;