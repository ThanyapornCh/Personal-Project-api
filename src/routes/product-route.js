const express = require('express');

const router = express.Router();
const authenticate = require('../middlewares/authenticate');

const productsController = require('../controllers/product-controller');
const upload = require('../middlewares/upload');
router.post(
  '/addProducts',
  upload.single('productImage'),
  productsController.addProducts
);

router.post(
  '/updateProducts',
  upload.single('productImage'),
  productsController.updateProducts
);

router.get('/allproducts', productsController.getAllProducts);
router.get('/addcategories', productsController.getAllCategories);
router.get('/addbrand', productsController.getAllBrand);
router.delete('/:productId', authenticate, productsController.deleteProducts);

module.exports = router;
