module.exports = (sequelize, DataTypes) => {
  const Episodes = sequelize.define('Episodes', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    season_id: { type: DataTypes.INTEGER, allowNull: true },
    title: { type: DataTypes.STRING, allowNull: true },
    description: { type: DataTypes.STRING, allowNull: true },
    episode_number: { type: DataTypes.INTEGER, allowNull: true },
    release_date: { type: DataTypes.INTEGER, allowNull: true },
    duration_in_minutes: { type: DataTypes.INTEGER, allowNull: true },
    thumbnail_url: { type: DataTypes.STRING, allowNull: true },
    video_url: { type: DataTypes.STRING, allowNull: true },
    created_at: { type: DataTypes.INTEGER, allowNull: true },
    updated_at: { type: DataTypes.INTEGER, allowNull: true },
    created_by: { type: DataTypes.INTEGER, allowNull: true },
    updated_by: { type: DataTypes.INTEGER, allowNull: true },
    episode_id: { type: DataTypes.INTEGER, allowNull: true },
  }, { tableName: 'episodes', timestamps: false });
  return Episodes;
};