const express = require('express');
const controller = require('../controller/phim.controller.js');

const router = express.Router();

router.get('/',controller.index);

module.exports = router;