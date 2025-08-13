module.exports = (sequelize, DataTypes) => {
  const Ratings = sequelize.define('Ratings', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: { type: DataTypes.INTEGER, allowNull: true },
    video_id: { type: DataTypes.INTEGER, allowNull: true },
    rating_value: { type: DataTypes.INTEGER, allowNull: true },
    review_text: { type: DataTypes.STRING, allowNull: true },
    created_at: { type: DataTypes.INTEGER, allowNull: true },
    rating_id: { type: DataTypes.INTEGER, allowNull: true },
  }, { tableName: 'ratings', timestamps: false });
  return Ratings;
};