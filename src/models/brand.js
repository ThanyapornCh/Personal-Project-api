module.exports = (sequelize, DataTypes) => {
  const Brands = sequelize.define(
    'Brands',
    {
      laneige: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      innisfree: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      anessa: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      etude: {
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

  Brands.associate = db => {
    Brands.belongsTo(db.Products, {
      foreignKey: {
        name: ' productId',
        allowNull: false,
      },
      onDelete: 'RESTRICT',
    });
  };

  return Brands;
};
