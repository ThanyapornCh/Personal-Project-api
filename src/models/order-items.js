module.exports = (sequelize, DataTypes) => {
  const OrderItems = sequelize.define(
    'OrderItems',
    {
      productQuantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      underscored: true,
    }
  );

  OrderItems.associate = db => {
    OrderItems.belongsTo(db.Orders, {
      foreignKey: {
        name: 'ordersId',
        allowNull: false,
      },
      onDelete: 'RESTRICT',
    }),
      OrderItems.belongsTo(db.Products, {
        foreignKey: {
          name: 'productId',
          allowNull: false,
        },
        onDelete: 'RESTRICT',
      });
  };

  return OrderItems;
};
