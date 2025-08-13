module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, allowNull: true },
    password: { type: DataTypes.STRING, allowNull: true },
    username: { type: DataTypes.STRING, allowNull: true },
    phone: { type: DataTypes.STRING, allowNull: true },
    user_type: { type: DataTypes.STRING, allowNull: true },
    date_of_birth: { type: DataTypes.STRING, allowNull: true },
  }, { tableName: 'users', timestamps: false });
  return User;
};