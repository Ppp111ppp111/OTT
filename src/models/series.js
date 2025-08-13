module.exports = (sequelize, DataTypes) => {
  const Series = sequelize.define('Series', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: true },
    description: { type: DataTypes.STRING, allowNull: true },
    release_date: { type: DataTypes.INTEGER, allowNull: true },
    total_seasons: { type: DataTypes.INTEGER, allowNull: true },
    created_at: { type: DataTypes.INTEGER, allowNull: true },
    updated_at: { type: DataTypes.INTEGER, allowNull: true },
    created_by: { type: DataTypes.INTEGER, allowNull: true },
    updated_by: { type: DataTypes.INTEGER, allowNull: true },
    content_type: { type: DataTypes.STRING, allowNull: true },
    language: { type: DataTypes.STRING, allowNull: true },
    cast: { type: DataTypes.STRING, allowNull: true },
    studio: { type: DataTypes.STRING, allowNull: true },
    videoimage: { type: DataTypes.STRING, allowNull: true },
    series_id: { type: DataTypes.INTEGER, allowNull: true },
  }, { tableName: 'series', timestamps: false });
  return Series;
};