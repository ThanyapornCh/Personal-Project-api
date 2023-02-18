const express = require('express');

const router = express.Router();
const authenticate = require('../middlewares/authenticate');
const orderController = require('../controllers/order-controller');

router.post('/:productId', authenticate, orderController.getOrder);
router.get('/', authenticate, orderController.getAllOrder);
router.put('/:orderItemsId', authenticate, orderController.updateOrder);
// router.post(
//   '/:orderId/userId/:userId',
//   upload.single('slipUrl'),
//   orderController.uploadSlip
// );

router.delete(
  '/:ordersId/product/:productId',
  authenticate,
  orderController.deleteOrder
);
module.exports = router;
