const express = require("express");
const login_router = express.Router();
const login_controller = require("../controllers/login_controller");

login_router.get("/loginpage",login_controller.login_page);
login_router.post("/login", login_controller.login);
login_router.get("/registerpage",login_controller.register_page);
login_router.post("/register", login_controller.register);

module.exports = login_router;
