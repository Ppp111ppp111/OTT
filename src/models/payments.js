module.exports = (sequelize, DataTypes) => {
  const Payments = sequelize.define('Payments', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: { type: DataTypes.INTEGER, allowNull: true },
    subscription_id: { type: DataTypes.INTEGER, allowNull: true },
    amount: { type: DataTypes.INTEGER, allowNull: true },
    payment_method: { type: DataTypes.STRING, allowNull: true },
    payment_date: { type: DataTypes.INTEGER, allowNull: true },
    transaction_id: { type: DataTypes.STRING, allowNull: true },
    status: { type: DataTypes.STRING, allowNull: true },
    payment_id: { type: DataTypes.INTEGER, allowNull: true },
  }, { tableName: 'payments', timestamps: false });
  return Payments;
};