const express = require('express');

const experienceContoller = require("../controller/experienceController");

const router = express.Router();

router.get('/', experienceContoller.experienceDetails);

module.exports = router;