const express = require('express');
const router = express.Router();
const { registerController,loginController,refreshController,logoutController,profileController} = require('../controller/users_controller');
const validate = require('../middleware/validate');
const { createUserSchema, loginSchema } = require('../middleware/validators/user.validator');
import { authenticateToken } from "../controller/auth/auth.js";
// User routes with validation
router.post('/register', validate(createUserSchema), registerController);
router.post('/login', validate(loginSchema),loginController);
router.post("/refreshtoken",refreshController);
router.post("/logout",logoutController);
router.post("/profile",authenticateToken,profileController);

module.exports = router;
