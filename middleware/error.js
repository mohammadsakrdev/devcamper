const ErrorResponse = require('../utils/errorResponse');

// @desc Error handler
const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  // Mongoose bad objectId
  if (err.name === 'CastError') {
    const message = `Resource not found with id ${err.value}`;
    error = new ErrorResponse(message, 404);
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    const message = 'Duplicate value entered';
    error = new ErrorResponse(message, 400);
  }

  // Mongoose validation errors
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(ele => ele.message);
    error = new ErrorResponse(message, 400);
  }

  console.error(err);
  return res.status(error.statusCode || 500).json({
    success: false,
    message: error.message || 'Server Error',
    data: null
  });
};

module.exports = errorHandler;
