
const express = require("express");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;


//Midleware
app.use(express.json());

app.listen(port, ()=>{console.log(`Listening on port http://localhost:${port}`);})