const express = require('express');

const router = express.Router();

const userController = require('../controllers/auth-controller');
const userUploadController = require('../controllers/user-controller');
const authenticate = require('../middlewares/authenticate');
const upload = require('../middlewares/upload');

router.post('/register', userController.register);
router.post('/login', userController.login);

router.post(
  '/uploadSlip',
  authenticate,
  upload.single('slipUrl'),
  userUploadController.uploadSlip
);

module.exports = router;
