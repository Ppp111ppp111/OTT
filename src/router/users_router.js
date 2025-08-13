const express = require('express');
const router = express.Router();
const controller = require('../controller/users_controller.js');

// router.get('/', controller.list || controller.get_all || controller.get); // Implementation missing
// router.get('/:id', controller.get || controller.get_one || controller.getOne || controller.getById); // Implementation missing
router.post('/', controller.create_user);
// router.put('/:id', controller.update || controller.update_one || controller.updateOne); // Implementation missing
// router.delete('/:id', controller.delete || controller.delete_one || controller.deleteOne); // Implementation missing

module.exports = router;
