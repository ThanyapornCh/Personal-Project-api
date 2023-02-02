module.exports = (sequelize, DataTypes) => {
  const OrderItems = sequelize.define('OrderItems', {
    productPrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

    productQuantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });

  return OrderItems;
};
