const express = require('express');
const router = express.Router();

const car = require('../models/car'); // Import the car model
const car_controlers = require('../controllers/carController');

/* GET home page. */
//router.get('/', carController.handbags_view_all_Page);

/* GET detail handbags page */
router.get('/detail', car_controlers.car_view_one_Page);

/* GET create car page */
router.get('/create', car_controlers.hats_create_Page);

/* GET create update page */
router.get('/update', car_controlers.hats_update_Page);

/* GET delete car page */
router.get('/delete', car_controlers.car_delete_Page);

module.exports = router;