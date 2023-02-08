module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define(
    'Categories',
    {
      type: {
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

  Categories.associate = db => {
    Categories.hasMany(db.Products, {
      foreignKey: {
        name: 'categoriesId',
        allowNull: false,
      },
      onDelete: 'RESTRICT',
    });
  };

  return Categories;
};
