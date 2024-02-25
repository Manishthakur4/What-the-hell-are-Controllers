// routes/shop.js
const path = require('path')
const express = require('express');
const rootDir = require('../util/path');
const contactUs = require('../controllers/contactus')
const router = express.Router();

router.get('/', contactUs.getContactUs);

router.post('/', contactUs.postContactUs);

router.get('/success', contactUs.getSuccessPage);

module.exports = router;