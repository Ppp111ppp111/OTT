const express = require('express');
const router = express.Router();
const controller = require('../controller/watchlist_controller.js');

router.get('/', controller.get_all_watchlists);
router.get('/:id', controller.get_watchlist);
router.post('/', controller.create_watchlist);
router.put('/:id', controller.update_watchlist);
router.delete('/:id', controller.delete_watchlist);

module.exports = router;
