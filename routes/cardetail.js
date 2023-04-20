// Import the necessary modules
const express = require('express');
const router = express.Router();
const car_controllers = require('../controllers/carController');

// Define a route for the car detail page
router.get('/detail', car_controllers.car_view_one_Page);

// Export the router
module.exports = router;
