const express = require('express');
const router = express.Router();
const controller = require('../controller/ratings_controller.js');

router.get('/', controller.get_all_ratings);
router.get('/:id', controller.get_rating);
router.post('/', controller.create_rating);
router.put('/:id', controller.update_rating);
router.delete('/:id', controller.delete_rating);

module.exports = router;
