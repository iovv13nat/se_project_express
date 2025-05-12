const express = require("express");
const router = express.Router();

const userRouter = require("./users");
const itemRouter = require("./clothinItems");

router.use("/users", userRouter);
router.use("/items", itemRouter);

module.exports = router;
