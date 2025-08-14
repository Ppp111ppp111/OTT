const { ValidationError } = require('joi');

/**
 * Middleware to validate request data against a Joi schema
 * @param {Joi.Schema} schema - Joi validation schema
 * @param {string} property - The request property to validate (body, query, params)
 * @returns {Function} Express middleware function
 */
const validate = (schema, property = 'body') => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req[property], {
      abortEarly: false, // Return all errors, not just the first one
      allowUnknown: true, // Allow unknown keys that will be ignored
      stripUnknown: true, // Remove unknown keys
    });

    if (error) {
      const errors = error.details.map((detail) => ({
        field: detail.path.join('.'),
        message: detail.message.replace(/['"]/g, ''),
        type: detail.type,
      }));

      return res.status(400).json({
        success: false,
        message: 'Validation Error',
        errors,
      });
    }

    // Replace the request data with the validated and sanitized data
    req[property] = value;
    next();
  };
};

module.exports = validate;
