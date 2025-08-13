const express = require('express');
const router = express.Router();
const controller = require('../controller/series_controller.js');

router.get('/', controller.get_all_series);
router.get('/:id', controller.get_series);
router.post('/', controller.create_series);
router.put('/:id', controller.update_series);
router.delete('/:id', controller.delete_series);

module.exports = router;
