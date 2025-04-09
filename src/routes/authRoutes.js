const express = require("express");
const router = express.Router();

const { register, login } = require("../controller/authController");

/*
router.post("/register", (req, res) => {
    res.send("Register");
});
*/
router.post("/register", register);//yako logic xai controller dekhi auxa.
router.post("/login", login);














module.exports = router;