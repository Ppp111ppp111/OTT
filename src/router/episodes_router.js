const express = require('express');
const router = express.Router();
const controller = require('../controller/episodes_controller.js');

router.get('/', controller.get_all_episodes);
router.get('/:id', controller.get_episode);
router.post('/', controller.create_episode);
router.put('/:id', controller.update_episode);
router.delete('/:id', controller.delete_episode);

module.exports = router;
