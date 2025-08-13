module.exports = (sequelize, DataTypes) => {
  const Interaction = sequelize.define('Interaction', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: { type: DataTypes.INTEGER, allowNull: true },
    video_id: { type: DataTypes.INTEGER, allowNull: true },
    like: { type: DataTypes.BOOLEAN, allowNull: true },
    dislike: { type: DataTypes.BOOLEAN, allowNull: true },
    report: { type: DataTypes.STRING, allowNull: true },
    interaction_id: { type: DataTypes.INTEGER, allowNull: true },
  }, { tableName: 'interactions', timestamps: false });
  return Interaction;
};