const express = require('express');
const router = express.Router();

const devices_router = require('./devices_router');
const episodes_router = require('./episodes_router');
const genre_router = require('./genre_router');
const interaction_router = require('./interaction_router');
const payments_router = require('./payments_router');
const ratings_router = require('./ratings_router');
const seasons_router = require('./seasons_router');
const series_router = require('./series_router');
const subscriptions_router = require('./subscriptions_router');
const user_session_router = require('./user_session_router');
const users_router = require('./users_router');
const video_categories_router = require('./video_categories_router');
const videos_router = require('./videos_router');
const watch_history_router = require('./watch_history_router');
const watchlist_router = require('./watchlist_router');

// register sub-routers
router.use('/devices', devices_router);
router.use('/episodes', episodes_router);
router.use('/genre', genre_router);
router.use('/interaction', interaction_router);
router.use('/payments', payments_router);
router.use('/ratings', ratings_router);
router.use('/seasons', seasons_router);
router.use('/series', series_router);
router.use('/subscriptions', subscriptions_router);
router.use('/user session', user_session_router);
router.use('/users', users_router);
router.use('/video categories', video_categories_router);
router.use('/videos', videos_router);
router.use('/watch history', watch_history_router);
router.use('/watchlist', watchlist_router);

module.exports = router;