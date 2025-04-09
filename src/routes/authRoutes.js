const express = require("express");
const { register, login } = require("../controller/authController");


const router = express.Router();
/*
router.post("/register", (req, res) => {
    res.send("Register");
});
*/
router.post("/register", register);//yako logic xai controller dekhi auxa.
router.post("/login", login);














module.exports = router;