require('dotenv').config();
const express = require("express");
const connectDB = require("./src/config/db");
const authRoutes = require("./src/routes/authRoutes");// yesh dekhi register ra login vo value auxa. 
const userRoutes =require("./src/routes/userRoutes");// yesh dekhi admin, manager ani user role base value auxa. 

const app = express();
const port = process.env.PORT || 5000;

connectDB();
//Midleware
app.use(express.json());



//Routes
//Model => Controller => Route => server
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes)

app.listen(port, ()=>{console.log(`Listening on port http://localhost:${port}`);})