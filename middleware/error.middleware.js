const errorMiddleware = (err, req, res, next) => {
  try {
    let error = { ...err };
    error.message = err.message;
    console.error(err);

    // Mongoose bad ObjectId
    if (err.name === "CastError") {
      const message = "Resource not found. Invalid";
      error = new Error(message);
      error.status = 404;
    }

    // Mongoose duplicate key
    if (err.name === "ValidationError") {
      const message = Object.values(err.errors).map((val) => val.message);
      error = new Error(message);
      error.status = 400;
    }

    res.status(error.status || 500).json({
      success: false,
      message: error.message || "Server Error",
    });
  } catch (error) {
    next(error);
  }
};

export default errorMiddleware;