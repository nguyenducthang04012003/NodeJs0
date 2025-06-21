const express = require("express");
const { getHomePage, getHoiIt, postCreateuser } = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomePage);
router.get("/hoidanit", getHoiIt);

router.post("/create-user", postCreateuser);

module.exports = router;