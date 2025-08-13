const express = require('express');
const router = express.Router();
const controller = require('../controller/watch_history_controller.js');

router.get('/', controller.get_all_watch_histories);
router.get('/:id', controller.get_watch_history);
router.post('/', controller.create_watch_history);
router.put('/:id', controller.update_watch_history);
router.delete('/:id', controller.delete_watch_history);

module.exports = router;
