require('dotenv').config();
const express = require("express");
const connectDB = require("./src/config/db");

const app = express();
const port = process.env.PORT || 5000;

connectDB();
//Midleware
app.use(express.json());



//Routes

app.listen(port, ()=>{console.log(`Listening on port http://localhost:${port}`);})