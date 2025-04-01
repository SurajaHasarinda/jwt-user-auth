const errorMiddleware = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message || "Server Error";

  console.error(err); // Log the error in the server console

  // Handle Mongoose bad ObjectId error
  if (err.name === "CastError") {
    error = {
      statusCode: 404,
      message: "Resource not found",
    };
  }

  // Handle Mongoose duplicate key error
  if (err.code === 11000) {
    error = {
      statusCode: 400,
      message: "Duplicate field value entered",
    };
  }

  // Handle Mongoose validation errors
  if (err.name === "ValidationError") {
    error = {
      statusCode: 400,
      message: Object.values(err.errors).map((value) => value.message).join(", "),
    };
  }

  // Set status code and return JSON response
  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "Server Error",
  });
};

export default errorMiddleware;