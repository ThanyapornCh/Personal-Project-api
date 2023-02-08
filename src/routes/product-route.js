const express = require('express');

const router = express.Router();
// const authenticate = require('../middlewares/authenticate');

const productsController = require('../controllers/product-controller');
router.post('/addProducts', productsController.addProducts);

module.exports = router;
