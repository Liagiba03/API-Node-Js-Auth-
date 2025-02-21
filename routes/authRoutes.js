const {getUsers, loginController} = require("../Controller/authController");
const router = require("express").Router();

router.get("/users", getUsers);

router.post("/login",loginController);

module.exports = router;
