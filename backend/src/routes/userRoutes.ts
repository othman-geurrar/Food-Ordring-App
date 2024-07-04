const userRoute = require("express").Router();

const { createUser } = require("../controllers/userController");

userRoute.post("/", createUser);

module.exports = userRoute;