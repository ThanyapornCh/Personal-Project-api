module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define(
    'Products',
    {
      productName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      productPrice: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      productImage: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      productDescription: {
        type: DataTypes.STRING,
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

  Products.associate = db => {
    Products.hasMany(db.OrderItems, {
      foreignKey: {
        name: 'orderItemsId',
        allowNull: false,
      },
      onDelete: 'RESTRICT',
    }),
      Products.belongsTo(db.Categories, {
        foreignKey: {
          name: 'categoryId',
          allowNull: false,
        },
        onDelete: 'RESTRICT',
      }),
      Products.belongsTo(db.Brands, {
        foreignKey: {
          name: 'brandId',
          allowNull: false,
        },
        onDelete: 'RESTRICT',
      });
  };

  return Products;
};
