module.exports = (sequelize, DataTypes) => {
  const WatchHistory = sequelize.define('WatchHistory', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: { type: DataTypes.INTEGER, allowNull: true },
    video_id: { type: DataTypes.INTEGER, allowNull: true },
    watched_at: { type: DataTypes.INTEGER, allowNull: true },
    progress_percentage: { type: DataTypes.INTEGER, allowNull: true },
    device_info: { type: DataTypes.STRING, allowNull: true },
    is_completed: { type: DataTypes.BOOLEAN, allowNull: true },
    last_position_in_seconds: { type: DataTypes.INTEGER, allowNull: true },
    watch_id: { type: DataTypes.INTEGER, allowNull: true },
  }, { tableName: 'watchhistory', timestamps: false });
  return WatchHistory;
};