module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define('Genre', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    genre_name: { type: DataTypes.STRING, allowNull: true },
    created_at: { type: DataTypes.INTEGER, allowNull: true },
    updated_at: { type: DataTypes.INTEGER, allowNull: true },
    genre_id: { type: DataTypes.INTEGER, allowNull: true },
  }, { tableName: 'genres', timestamps: false });
  return Genre;
};