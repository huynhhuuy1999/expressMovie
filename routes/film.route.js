const express = require('express');
const controller = require('../controller/phim.controller.js');

const router = express.Router();

router.get('/',controller.index);
router.get('/detail/:id',controller.detail);

module.exports = router;