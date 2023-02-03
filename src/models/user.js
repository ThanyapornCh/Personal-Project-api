module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      Point: {
        type: DataTypes.INTEGER,
        unique: true,
        validate: {
          is: /^[0-9]{10}$/,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      profileImage: DataTypes.STRING,
      coverImage: DataTypes.STRING,
      role: {
        type: DataTypes.ENUM(['user', 'admin']),
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

  // User.associate = db => {
  //   User.hasMany(db.Post, {
  //     foreignKey: {
  //       name: 'userId',
  //       allowNull: false
  //     },
  //     onDelete: 'RESTRICT'
  //   });

  //   User.hasMany(db.Comment, {
  //     foreignKey: {
  //       name: 'userId',
  //       allowNull: false
  //     },
  //     onDelete: 'RESTRICT'
  //   });

  //   User.hasMany(db.Like, {
  //     foreignKey: {
  //       name: 'userId',
  //       allowNull: false
  //     },
  //     onDelete: 'RESTRICT'
  //   });

  //   User.hasMany(db.Friend, {
  //     as: 'Requester',
  //     foreignKey: {
  //       name: 'requesterId',
  //       allowNull: false
  //     },
  //     onDelete: 'RESTRICT'
  //   });

  //   User.hasMany(db.Friend, {
  //     as: 'Accepter',
  //     foreignKey: {
  //       name: 'accepterId',
  //       allowNull: false
  //     },
  //     onDelete: 'RESTRICT'
  //   });
  // };

  return User;
};
