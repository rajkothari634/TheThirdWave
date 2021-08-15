const router = require("express").Router();

const Login = require("../controllers/auth/login");

router.get("/", Login.login);

module.exports = router;
