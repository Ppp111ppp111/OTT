const express = require('express');
const router = express.Router();
const controller = require('../controller/videos_controller.js');

router.get('/', controller.get_all_videos);
router.get('/:id', controller.get_video);
router.post('/', controller.create_video);
router.put('/:id', controller.update_video);
router.delete('/:id', controller.delete_video);

module.exports = router;
