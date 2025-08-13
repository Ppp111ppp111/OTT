module.exports = (sequelize, DataTypes) => {
  const Subscriptions = sequelize.define('Subscriptions', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: true },
    price: { type: DataTypes.INTEGER, allowNull: true },
    billing_cycle: { type: DataTypes.STRING, allowNull: true },
    max_devices: { type: DataTypes.INTEGER, allowNull: true },
    video_quality: { type: DataTypes.STRING, allowNull: true },
    created_at: { type: DataTypes.INTEGER, allowNull: true },
    updated_at: { type: DataTypes.INTEGER, allowNull: true },
    created_by: { type: DataTypes.INTEGER, allowNull: true },
    updated_by: { type: DataTypes.INTEGER, allowNull: true },
    subscription_id: { type: DataTypes.INTEGER, allowNull: true },
  }, { tableName: 'subscriptions', timestamps: false });
  return Subscriptions;
};