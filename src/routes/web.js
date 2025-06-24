const express = require("express");
const {
  getHomePage,
  getHoiIt,
  postCreatePage,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomePage);
router.get("/hoidanit", getHoiIt);
router.get("/create", getCreatePage);
router.get("/update/:id", getUpdatePage);

router.post("/create-user", postCreatePage);
router.post("/update-user", postUpdateUser);

module.exports = router;