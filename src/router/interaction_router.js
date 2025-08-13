const express = require('express');
const router = express.Router();
const controller = require('../controller/interaction_controller.js');

router.get('/', controller.get_all_interactions);
router.get('/:id', controller.get_interaction);
router.post('/', controller.create_interaction);
router.put('/:id', controller.update_interaction);
router.delete('/:id', controller.delete_interaction);

module.exports = router;
