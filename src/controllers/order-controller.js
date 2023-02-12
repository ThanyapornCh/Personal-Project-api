const createError = require('../utils/create-error');
const { Orders, Products, OrderItems } = require('../models');

exports.getOrder = async (req, res, next) => {
  try {
    console.log('test');
    const { productId } = req.params;

    const response = await Products.findOne({
      where: {
        id: Number(productId),
      },
    });

    const product = JSON.parse(JSON.stringify(response));

    const order = await Orders.findOne({
      where: {
        orderStatus: 'cart',
        userId: req.user.id,
      },
    });

    if (!order) {
      const newOrder = await Orders.create({
        orderStatus: 'cart',
        userId: req.user.id,
        totalPrice: product.productPrice,
        slipUrl: 'Empty',
      });
      const runOrder = JSON.parse(JSON.stringify(newOrder));
      console.log(runOrder);
      await OrderItems.create({
        productPrice: product.productPrice,
        productQuantity: 1,
        ordersId: runOrder.id,
        productId: product.id,
      });
      //order
      const orders = await Orders.findOne({
        where: {
          id: runOrder.id,
        },
        include: {
          model: OrderItems,
          include: {
            model: Products,
          },
        },
      });

      return res.json(orders);
    } else {
      //ถ้าuser กดสั่งซื้อเข้าตะกร้า item1 แล้วกด add อีกตัวเป็นสินค้าต่างกัน เข้า Cart คือ item2
      const isItem = await OrderItems.findOne({
        where: {
          ordersId: order.id,
          productId: product.id,
        },
      });
      //Update สินค้า
      if (isItem) {
        await OrderItems.increment(
          { productQuantity: 1 },
          {
            where: {
              id: isItem.id,
            },
          }
        );
        //ถ้ายังไม่มีในตะกร้าสินค้าให้สร้างใหม่
      } else {
        await OrderItems.create({
          productPrice: product.productPrice,
          productQuantity: 1,
          ordersId: order.id,
          productId: product.id,
        });
      }
    }

    const findOrder = await Orders.findOne({
      where: {
        id: order.id,
      },
      include: {
        model: OrderItems,
        include: {
          model: Products,
        },
      },
    });
    return res.json(findOrder);

    // const product = await productId();
  } catch (error) {
    next(error);
  }
};
