module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define('Answer', {
    skinTypes: {
      type: DataTypes.ENUM([
        'drySkin',
        'combinationSkin',
        'oilySkin',
        'sensitiveSkin',
      ]),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    facialSkinProblems: {
      type: DataTypes.ENUM([
        'acne',
        'melasma',
        'blemish',
        'wrinkles',
        'darkCircles',
        'pore',
      ]),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    skinCare: {
      type: DataTypes.ENUM([
        'facialCleanser',
        'serum',
        'moisturizer',
        'eyeCream',
        'sunscreen',
        'sleepingMask',
      ]),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });

  return Answer;
};
