const express = require('express');
const router = express.Router();
const controller = require('../controller/user_session_controller.js');

router.get('/', controller.get_all_user_sessions);
router.get('/:id', controller.get_user_session);
router.post('/', controller.create_user_session);
router.put('/:id', controller.update_user_session);
router.delete('/:id', controller.delete_user_session);

module.exports = router;
