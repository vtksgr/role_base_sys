const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/authMiddleware")

//Only admin can access this router
router.get("/admin", verifyToken, (req, res) =>{
    res.json({message: "welcome admin"});
});

//both admin and manager can access this router
router.get("/manager", verifyToken, (req, res) =>{
    res.json({message: "welcome manager"});
});

//All can access this router
router.get("/user", verifyToken, (req, res) =>{
    res.json({message: "welcome user"});
});

module.exports = router;