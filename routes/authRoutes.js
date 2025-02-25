const {getUsers, loginController, createUserController} = require("../Controller/authController");
const router = require("express").Router();

router.get("/users", getUsers);

router.post("/login",loginController);
router.post("/create-user",createUserController)

module.exports = router;
