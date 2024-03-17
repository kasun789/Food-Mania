const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./src/routes/userRoute");
const cors = require('cors')

const app = express();
const port = 3000;

/**
 * mongodb connection
 */
mongoose.connect("mongodb://localhost:27017/foodmania");

// Enable CORS for a specific origin
app.use(cors());
  
app.use(express.json());

app.use('/api/user',userRoute)

app.listen(port,() =>{
    console.log(`App is listing port : ${port} `);
})