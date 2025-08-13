const express = require('express');
const router = express.Router();
const controller = require('../controller/genre_controller.js');

router.get('/', controller.get_all_genres);
router.get('/:id', controller.get_genre);
router.post('/', controller.create_genre);
router.put('/:id', controller.update_genre);
router.delete('/:id', controller.delete_genre);

module.exports = router;
