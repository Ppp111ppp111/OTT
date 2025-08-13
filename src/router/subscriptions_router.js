const express = require('express');
const router = express.Router();
const controller = require('../controller/subscriptions_controller.js');

router.get('/', controller.get_all_subscriptions);
router.get('/:id', controller.get_subscription);
router.post('/', controller.create_subscription);
router.put('/:id', controller.update_subscription);
router.delete('/:id', controller.delete_subscription);

module.exports = router;
