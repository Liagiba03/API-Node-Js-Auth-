const {loginController, createUsrController} = require("../Controller/authController");
const router = require("express").Router();

//router.get("/users", getUsers);

router.post("/login",loginController);
router.post("/signup",createUsrController);
//router.post("/create-user",createUserController)

module.exports = router;
