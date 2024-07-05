import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateUserRequest } from "../middleware/validation";

const userRoute = require("express").Router();

const { createUser, updateUser } = require("../controllers/userController");

userRoute
  .post("/", jwtCheck, createUser)
  .put("/", jwtParse, jwtCheck, validateUserRequest, updateUser);

module.exports = userRoute;
