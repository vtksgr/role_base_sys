require('dotenv').config();
const express = require("express");
const connectDB = require("./src/config/db");
const authRoutes = require("./src/routes/authRoutes");// yes dekhi register ra login vo value auxa. 

const app = express();
const port = process.env.PORT || 5000;

connectDB();
//Midleware
app.use(express.json());



//Routes
//Model => Controller => Route => server
app.use("/api/auth", authRoutes);

app.listen(port, ()=>{console.log(`Listening on port http://localhost:${port}`);})