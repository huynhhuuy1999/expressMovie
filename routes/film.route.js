const express = require('express');
const controller = require('../controller/phim.controller.js');

const router = express.Router();

router.get('/',controller.index);
router.get('/detail/:id',controller.detail);
router.get('/category/:id',controller.listCategory);
router.get('/country/:id',controller.listCountry);
router.get('/Odd-Film',controller.listOddFilm);
router.get('/Series-Film',controller.listSeriesFilm);
router.get('/Odd-Film/:id',controller.listYear);
router.get('/getListFilmWithTab',controller.getListFilmWithTab);

module.exports = router;