const { StatusCodes } = require("http-status-codes");
const User = require("../models/user");
const { NOT_FOUND } = require("../utils/errors");
const handleError = require("../utils/handleError");

const getUsers = (req, res) => {
  User.find({})
    .then((users) => res.status(StatusCodes.OK).send(users))
    .catch((err) => handleError(err, res));
};

const getUser = (req, res) => {
  User.findById(req.params.userId)
    .orFail(() => {
      const error = new Error("User not found");
      error.statusCode = NOT_FOUND;
      throw error;
    })

    .then((user) => {
      res.status(StatusCodes.OK).send(user);
    })
    .catch((err) => handleError(err, res));
};

const createUser = (req, res) => {
  const { name, avatar } = req.body;

  User.create({ name, avatar })
    .then((newUser) => res.status(StatusCodes.CREATED).send(newUser))
    .catch((err) => handleError(err, res));
};

module.exports = { getUsers, getUser, createUser };
