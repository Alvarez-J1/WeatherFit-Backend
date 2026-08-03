const router = require("express").Router();

const itemRouter = require("./clothingItems");

const { createUser, login } = require("../controllers/users");

const {
  validateAuthentication,
  validateUserInfoBody,
} = require("../middlewares/validation");

const userRouter = require("./users");

router.use("/users", userRouter);
router.use("/items", itemRouter);
router.post("/signin", validateAuthentication, login);
router.post("/signup", validateUserInfoBody, createUser);
module.exports = router;
