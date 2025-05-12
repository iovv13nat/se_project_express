const { StatusCodes } = require("http-status-codes");

module.exports = {
  BAD_REQUEST: StatusCodes.BAD_REQUEST,
  NOT_FOUND: StatusCodes.NOT_FOUND,
  SERVER_ERROR: StatusCodes.INTERNAL_SERVER_ERROR,
};
