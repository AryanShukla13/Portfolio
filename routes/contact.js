const express = require('express');
const contactContoller = require("../controller/contactController");

const router = express.Router();

router.get('/', contactContoller.contactDetails);
router.post('/message', contactContoller.sendMessage);

module.exports = router;

