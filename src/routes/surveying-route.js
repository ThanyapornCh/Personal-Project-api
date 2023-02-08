const express = require('express');

const router = express.Router();
const authenticate = require('../middlewares/authenticate');

const surveyingController = require('../controllers/surveying-controller');
router.post(
  '/createSurveying',
  authenticate,
  surveyingController.createSurveying
);

module.exports = router;
