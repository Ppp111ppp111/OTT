const express = require('express');
const router = express.Router();
const controller = require('../controller/devices_controller.js');

router.get('/', controller.get_all_devices);
router.get('/:id', controller.get_device);
router.post('/', controller.create_device);
router.put('/:id', controller.update_device);
router.delete('/:id', controller.delete_device);

module.exports = router;
