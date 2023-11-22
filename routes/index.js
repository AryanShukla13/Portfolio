const express = require('express');
const indexController = require("../controller/indexController");
const educationController = require('../controller/educationController');
const router = express.Router();

router.get("/", indexController.indexPage);


module.exports = router;