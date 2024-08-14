const express = require("express");
const UserController = require("../controllers/user.controller");

const route = express.Router();

route.post("/register", UserController.userRegister);
route.post("/login", UserController.userLogin);

module.exports = route;
