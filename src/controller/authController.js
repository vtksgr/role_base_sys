const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
    try {
        //yesma value model dekhi auxa.
        const { username, password, role } = req.body;

        //hashing password
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = await bcrypt.hash(password, salt);

        //create new user
        const newuser = new User({ username, password: hashPassword, role });
        // save user
        await newuser.save();

        res.status(201).json({ message: `User created successfully : ${username}` });
    } catch (err) {
        res.status(500).json({ message: "user_not_created", error: err.message });
    }
};

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        //yesma findOne use gareko xai user name xai unique value vayera ho
        const user = await User.findOne({ username });
        //if user not found
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        //if user found
        const isMatch = await bcrypt.compare(password, user.password);
        //if password not match
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        //if password match generate token
        const token = jwt.sign({ id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );
        res.status(200).json({ message: "Login successful", token });

    } catch (error) {

    }
};

module.exports = { register, login };
