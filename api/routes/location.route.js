var express = require('express');
var router = express.Router();
var locationController = require('../controllers/location.controller');

// Define routes with the correct paths
router.get('/', locationController.getLocations);
router.post('/create', locationController.createLocations);
router.delete('/deleteAll', locationController.deleteLocations); // Adjusted to match your desired route

module.exports = router;
