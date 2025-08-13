const express = require('express');
const router = express.Router();
const controller = require('../controller/seasons_controller.js');

router.get('/', controller.get_all_seasons);
router.get('/:id', controller.get_season);
router.post('/', controller.create_season);
router.put('/:id', controller.update_season);
router.delete('/:id', controller.delete_season);

module.exports = router;
