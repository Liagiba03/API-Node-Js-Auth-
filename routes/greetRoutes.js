const router = require("express").Router();
const { greetProtected } = require("../Controller/greetController");
const {validarToken} = require("../Middlewares/authMiddlewares");


router.get("/saludo-protegido", validarToken, greetProtected);

module.exports = router;