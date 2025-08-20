const Joi = require('joi');

// Common validation patterns
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// User creation schema
const createUserSchema = Joi.object({
  email: Joi.string().pattern(emailPattern).required().messages({
    'string.pattern.base': 'Please provide a valid email address',
  }),
  password: Joi.string().pattern(passwordPattern).required().messages({
    'string.pattern.base': 'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character',
  }),
  name: Joi.string().min(2).max(50).required().messages({
    'string.min': 'Name must be at least 2 characters long',
    'string.max': 'Name cannot be longer than 50 characters',
  }),
  role: Joi.string().valid('user', 'admin').default('user').messages({
    'any.only': 'Role must be either "user" or "admin"',
  }),
  status: Joi.string().valid('active', 'inactive', 'suspended').default('active'),
});

// User login schema
const loginSchema = Joi.object({
  email: Joi.string().pattern(emailPattern).required().messages({
    'string.pattern.base': 'Please provide a valid email address',
  }),
  password: Joi.string().required().messages({
    'string.empty': 'Password is required',
  }),
});

module.exports = {
  createUserSchema,
  loginSchema,
};
