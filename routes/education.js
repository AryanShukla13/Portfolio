const express = require('express');
const educationController = require('../controller/educationController');

const router = express.Router();

router.get("/", educationController.showEducation);

module.exports = router;