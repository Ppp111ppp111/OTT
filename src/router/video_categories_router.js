const express = require('express');
const router = express.Router();
const controller = require('../controller/video_categories_controller.js');

router.get('/', controller.get_all_video_categories);
router.get('/:id', controller.get_video_category);
router.post('/', controller.create_video_category);
router.put('/:id', controller.update_video_category);
router.delete('/:id', controller.delete_video_category);

module.exports = router;
