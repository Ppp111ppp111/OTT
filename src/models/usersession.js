module.exports = (sequelize, DataTypes) => {
  const UserSession = sequelize.define('UserSession', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: { type: DataTypes.INTEGER, allowNull: true },
    token: { type: DataTypes.STRING, allowNull: true },
    referesh_token: { type: DataTypes.STRING, allowNull: true },
    last_login_at: { type: DataTypes.INTEGER, allowNull: true },
    first_login_at: { type: DataTypes.INTEGER, allowNull: true },
    device_id: { type: DataTypes.INTEGER, allowNull: true },
  }, { tableName: 'usersessions', timestamps: false });
  return UserSession;
};