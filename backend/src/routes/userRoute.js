const Router = require("express");
const router = Router();
const userController = require("../controllers/userController");
const loginController = require("../controllers/loginController");

router.post("/register",userController.registerUser);
router.post("/login", loginController.loginUser);

module.exports = router;