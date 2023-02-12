const express = require('express');

const router = express.Router();
const authenticate = require('../middlewares/authenticate');
const orderController = require('../controllers/order-controller');

router.post('/:productId', authenticate, orderController.getOrder);
module.exports = router;
