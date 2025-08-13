module.exports = (sequelize, DataTypes) => {
  const Videos = sequelize.define('Videos', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    video_title: { type: DataTypes.STRING, allowNull: true },
    video_desc: { type: DataTypes.STRING, allowNull: true },
    duration_in_minutes: { type: DataTypes.INTEGER, allowNull: true },
    video_release: { type: DataTypes.INTEGER, allowNull: true },
    tags: { type: DataTypes.STRING, allowNull: true },
    created_at: { type: DataTypes.INTEGER, allowNull: true },
    created_by: { type: DataTypes.INTEGER, allowNull: true },
    type: { type: DataTypes.STRING, allowNull: true },
    language: { type: DataTypes.STRING, allowNull: true },
    age_rating: { type: DataTypes.INTEGER, allowNull: true },
    thumbnail_url: { type: DataTypes.STRING, allowNull: true },
    video_url: { type: DataTypes.STRING, allowNull: true },
    updated_at: { type: DataTypes.INTEGER, allowNull: true },
    updated_by: { type: DataTypes.INTEGER, allowNull: true },
    video_id: { type: DataTypes.INTEGER, allowNull: true },
  }, { tableName: 'videos', timestamps: false });
  return Videos;
};