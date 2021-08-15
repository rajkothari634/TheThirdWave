const router = require("express").Router();

const Login = require("../controllers/auth/login");

router.post("/", Login.login);

module.exports = router;
