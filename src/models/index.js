const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

const Devices = require('./devices')(sequelize, DataTypes);

const Episodes = require('./episodes')(sequelize, DataTypes);

const Genre = require('./genre')(sequelize, DataTypes);

const Interaction = require('./interaction')(sequelize, DataTypes);

const Payments = require('./payments')(sequelize, DataTypes);

const Ratings = require('./ratings')(sequelize, DataTypes);

const Seasons = require('./seasons')(sequelize, DataTypes);

const Series = require('./series')(sequelize, DataTypes);

const Subscriptions = require('./subscriptions')(sequelize, DataTypes);

const User = require('./user')(sequelize, DataTypes);

const UserSession = require('./usersession')(sequelize, DataTypes);

const VideoCategories = require('./videocategories')(sequelize, DataTypes);

const Videos = require('./videos')(sequelize, DataTypes);

const WatchHistory = require('./watchhistory')(sequelize, DataTypes);

const Watchlist = require('./watchlist')(sequelize, DataTypes);

module.exports = {
  Devices,
  Episodes,
  Genre,
  Interaction,
  Payments,
  Ratings,
  Seasons,
  Series,
  Subscriptions,
  User,
  UserSession,
  VideoCategories,
  Videos,
  WatchHistory,
  Watchlist,
  sequelize
};