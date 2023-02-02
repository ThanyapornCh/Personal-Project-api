module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    DataPersonal: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    questionType: {
      type: DataTypes.ENUM(['checkSkinType', 'skinCareProduct']),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });

  return Question;
};
