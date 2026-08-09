const errorHandler = (err, req, res, next) => {
  console.error(err);
  const { statusCode = 500, message } = err;
  const responseMessage =
    statusCode === 500
      ? "An error occurred on the server"
      : message || "An error occurred";

  res.status(statusCode).send({
    message: responseMessage,
  });
};

module.exports = errorHandler;
