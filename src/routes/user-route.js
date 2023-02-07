const express = require('express');

const router = express.Router();

const userController = require('../controllers/auth-controller');
router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/addproducts', userController.addProducts);

module.exports = router;
