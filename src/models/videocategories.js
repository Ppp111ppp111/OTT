module.exports = (sequelize, DataTypes) => {
  const VideoCategories = sequelize.define('VideoCategories', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    video_id: { type: DataTypes.INTEGER, allowNull: true },
    genre_id: { type: DataTypes.INTEGER, allowNull: true },
  }, { tableName: 'videocategories', timestamps: false });
  return VideoCategories;
};