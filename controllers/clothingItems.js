const { StatusCodes } = require("http-status-codes");
const Item = require("../models/clothingItem");
const { NOT_FOUND } = require("../utils/errors");
const handleError = require("../utils/handleError");

const getItems = (req, res) => {
  Item.find({})
    .populate("owner likes")
    .then((items) => res.status(StatusCodes.OK).send(items))
    .catch((err) => handleError(err, res));
};

const createItem = (req, res) => {
  // console.log(req.user);
  const { name, weather, imageUrl } = req.body;
  const owner = req.user._id;

  Item.create({ name, weather, imageUrl, owner })
    .then((item) => res.status(StatusCodes.CREATED).send(item))
    .catch((err) => handleError(err, res));
};

const deleteItem = (req, res) => {
  Item.findByIdAndDelete(req.params.itemId)
    .orFail(() => {
      const error = new Error("Item not found");
      error.statusCode = NOT_FOUND;
      throw error;
    })
    .then((item) => res.send({ message: "Item deleted", item }))
    .catch((err) => handleError(err, res));
};

const likeItem = (req, res) => {
  Item.findByIdAndUpdate(
    req.params.itemId,
    {
      $addToSet: { likes: req.user._id },
    },
    { new: true }
  )
    .orFail(() => {
      const error = new Error("Item not found");
      error.statusCode = NOT_FOUND;
      throw error;
    })
    .populate("owner likes")
    .then((item) => res.status(StatusCodes.OK).send(item))
    .catch((err) => handleError(err, res));
};

const dislikeItem = (req, res) => {
  Item.findByIdAndUpdate(
    req.params.itemId,
    { $pull: { likes: req.user._id } },
    { new: true }
  )
    .orFail(() => {
      const error = new Error("Item not found");
      error.statusCode = NOT_FOUND;
      throw error;
    })
    .populate("owner likes")
    .then((item) => res.status(StatusCodes.OK).send(item))
    .catch((err) => handleError(err, res));
};
module.exports = { getItems, createItem, deleteItem, likeItem, dislikeItem };
