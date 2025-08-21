const express = require('express');
const router = express.Router();
const { registerController,loginController,refreshController,logoutController,profileController} = require('../controller/users_controller');
const validate = require('../middleware/validate');
const { registerSchema, loginSchema } = require('../middleware/validators/user_validator.js');
const { authenticateToken } = require('../controller/auth/auth.js');

// User routes with validation
router.post('/register', validate(registerSchema), registerController);
router.post('/login', validate(loginSchema),loginController);
router.post("/refreshtoken",refreshController);
router.post("/logout",logoutController);
router.post("/profile",authenticateToken,profileController);

module.exports = router;
