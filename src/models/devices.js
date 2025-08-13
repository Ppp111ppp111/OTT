module.exports = (sequelize, DataTypes) => {
  const Devices = sequelize.define('Devices', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: { type: DataTypes.INTEGER, allowNull: true },
    device_name: { type: DataTypes.STRING, allowNull: true },
    device_type: { type: DataTypes.STRING, allowNull: true },
    last_active_at: { type: DataTypes.INTEGER, allowNull: true },
    device_id: { type: DataTypes.INTEGER, allowNull: true },
  }, { tableName: 'devices', timestamps: false });
  return Devices;
};