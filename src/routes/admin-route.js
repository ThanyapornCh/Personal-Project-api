const express = require('express');

const router = express.Router();
const adminAuthenticate = require('../middlewares/admin-authenticate');
const authenticate = require('../middlewares/authenticate');
const adminController = require('../controllers/admin-controller');

router.get('/checkOrder', authenticate, adminController.getAllOrderStatus);

module.exports = router;
