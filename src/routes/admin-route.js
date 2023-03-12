const express = require('express');

const router = express.Router();
const adminAuthenticate = require('../middlewares/admin-authenticate');
const authenticate = require('../middlewares/authenticate');
// const adminController = require('../controllers/admin-controller');
const orderController = require('../controllers/order-controller');

router.get('/checkOrder', authenticate, orderController.getAllOrderStatus);

module.exports = router;
