const express = require('express');
const router = express.Router();
const controller = require('../controller/payments_controller.js');

router.get('/', controller.get_all_payments);
router.get('/:id', controller.get_payment);
router.post('/', controller.create_payment);
router.put('/:id', controller.update_payment);
router.delete('/:id', controller.delete_payment);

module.exports = router;
