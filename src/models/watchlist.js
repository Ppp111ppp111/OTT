module.exports = (sequelize, DataTypes) => {
  const Watchlist = sequelize.define('Watchlist', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: { type: DataTypes.INTEGER, allowNull: true },
    video_id: { type: DataTypes.INTEGER, allowNull: true },
    added_at: { type: DataTypes.INTEGER, allowNull: true },
    watchlist_id: { type: DataTypes.INTEGER, allowNull: true },
  }, { tableName: 'watchlists', timestamps: false });
  return Watchlist;
};