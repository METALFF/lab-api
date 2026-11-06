export function errorHandler(err, req, res, next) {
  if(err.code === "P2025") {
    return res.status(404).json({
      message: "Product not found",
    });
  }
  const statusCode = err.statusCode || 500;

  console.error(err);

  res.status(statusCode).json({
    message: statusCode === 500 ? "Internal server error" : err.message
  });
}
