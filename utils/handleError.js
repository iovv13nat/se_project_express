const { BAD_REQUEST, NOT_FOUND, SERVER_ERROR } = require("./errors");

function handleError(err, res) {
  console.error(err);

  if (err.name === "ValidationError") {
    return res.status(BAD_REQUEST).send({
      message: "Invalid data",
      error: err.message,
    });
  }

  if (err.name === "CastError") {
    return res.status(BAD_REQUEST).send({
      message: "Invalid Id format",
    });
  }

  if (err.statusCode === NOT_FOUND) {
    return res
      .status(NOT_FOUND)
      .send({ message: err.message || "Resource not found" });
  }

  return res.status(SERVER_ERROR).send({
    message: "An error occured on the server",
    error: err.message,
  });
}

module.exports = handleError;
