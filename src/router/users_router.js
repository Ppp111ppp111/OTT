const express = require('express');
const router = express.Router();
const controller = require('../controller/users_controller');
const validate = require('../middleware/validate');
const { createUserSchema, loginSchema } = require('../middleware/validators/user.validator');

// User routes with validation
router.post('/register', validate(createUserSchema), controller.create_user);
router.post('/login', validate(loginSchema), controller.login_user);

module.exports = router;
