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

exports.deleteOrder = async (req, res, next) => {
  const { ordersId, productId } = req.params;

  try {
    const totalDelete = await OrderItems.destroy({
      where: {
        productId: +productId,
        ordersId: +ordersId,
      },
    });
    console.log(totalDelete);
    if (totalDelete === 0) {
      createError('Your cart is empty');
    }
    res.status(204).json({ messgae: 'Delete order complete' });
  } catch (error) {
    next(error);
  }
};

exports.getAllOrder = async (req, res, next) => {
  const orders = await Orders.findOne({
    where: {
      userId: req.user.id,
      orderStatus: 'cart',
    },
    include: {
      model: OrderItems,
      include: {
        model: Products,
      },
    },
  });
  res.status(200).json({ orders });
};

exports.updateOrder = async (req, res, next) => {
  const { orderItemsId } = req.params;
  const { methode } = req.body;
  const orderItems = await OrderItems.findOne({
    where: {
      id: Number(orderItemsId),
    },
  });
  if (methode === 'add') {
    await OrderItems.increment(
      { productQuantity: 1 },
      {
        where: {
          id: Number(orderItemsId),
        },
      }
    );
  } else if (methode === 'minus' && orderItems.productQuantity > 0) {
    await OrderItems.decrement(
      { productQuantity: 1 },
      {
        where: {
          id: Number(orderItemsId),
        },
      }
    );
  }
  const unpaidorder = await Orders.findOne({
    where: {
      userId: req.user.id,
      orderStatus: 'cart',
    },
    include: {
      model: OrderItems,
      include: {
        model: Products,
      },
    },
  });
  res.status(200).json({ order: unpaidorder });

  // const upstatus = await OrderItems.findAll({
  //   where: {
  //     productQuantity: Number(count),

  //   }
  // })
};
