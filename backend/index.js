const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./src/routes/userRoute");

const app = express();
const port = 3000;

/**
 * mongodb connection
 */
mongoose.connect("mongodb://localhost:27017/foodmania",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json());

app.use('api/user',userRoute)

app.listen(() =>{
    console.log(`App is listing port : http://localhost:${port} `);
})