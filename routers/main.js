let express = require('express');

let mainController = require('../controllers/main-controller.js');

let router = express.Router();

router.get('/', mainController.index);

router.get('/about', mainController.about);

module.exports = router;
