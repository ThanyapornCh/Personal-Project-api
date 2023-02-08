module.exports = (sequelize, DataTypes) => {
  const Brands = sequelize.define(
    'Brands',
    {
      name: {
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
    Brands.hasMany(db.Products, {
      foreignKey: {
        name: ' brandId',
        allowNull: false,
      },
      onDelete: 'RESTRICT',
    });
  };

  return Brands;
};
