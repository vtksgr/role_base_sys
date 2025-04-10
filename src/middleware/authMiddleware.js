/*
    userRoutes ko route lai protected garni kam garxa.
*/
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) =>{
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;

    if(authHeader && authHeader.startsWith("Bearer")){
        token = authHeader.split(" ")[1];
        //agar token xaina vane
        if(!token){
            return res.status(401).json({
                message: "No token, authorization denied"
            });
        }
        // agar token xa vane decode garna parx.
        try {
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decode;
            console.log("the decoded user is: ", req.user);
            next();
        } catch (err) {
            res.status(400).json({
                message: "token is not valid"
            })
        }
    }else{
        return res.status(401).json({
            message: "Please login first, to generate the token"
        });
    }
};

module.exports = verifyToken;
