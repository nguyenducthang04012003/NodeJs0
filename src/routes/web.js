const express = require("express");
const { getHomePage, getHoiIt } = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomePage);
router.get("/hoidanit", getHoiIt);

module.exports = router;