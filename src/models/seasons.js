module.exports = (sequelize, DataTypes) => {
  const Seasons = sequelize.define('Seasons', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    series_id: { type: DataTypes.INTEGER, allowNull: true },
    season_number: { type: DataTypes.INTEGER, allowNull: true },
    release_date: { type: DataTypes.INTEGER, allowNull: true },
    total_episodes: { type: DataTypes.INTEGER, allowNull: true },
    created_at: { type: DataTypes.INTEGER, allowNull: true },
    updated_at: { type: DataTypes.INTEGER, allowNull: true },
    created_by: { type: DataTypes.INTEGER, allowNull: true },
    updated_by: { type: DataTypes.INTEGER, allowNull: true },
    season_id: { type: DataTypes.INTEGER, allowNull: true },
  }, { tableName: 'seasons', timestamps: false });
  return Seasons;
};