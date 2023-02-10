const express = require('express');

const router = express.Router();
// const authenticate = require('../middlewares/authenticate');

const productsController = require('../controllers/product-controller');
const upload = require('../middlewares/upload');
router.post(
  '/addProducts',
  upload.single('productImage'),
  productsController.addProducts
);

router.get('/allproducts', productsController.getAllProducts);
router.get('/addcategories', productsController.getAllCategories);
router.get('/addbrand', productsController.getAllBrand);

module.exports = router;
