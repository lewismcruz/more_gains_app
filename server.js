const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// uncomment once app works locally, is tested, and deployed to heroku
const PORT = process.env.PORT || 3000;

// use for local testing of site before pre-deployment
//const PORT = 3000;


const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

let MONGODB_URI = process.env.MONGODB_URI || "mongodb://user1:password1@ds157682.mlab.com:57682/heroku_w4l282nj";  
mongoose.connect(MONGODB_URI);


app.use(require("./routes/apiroutes"));
app.use(require("./routes/htmlroutes"));


// This starts our server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);

});

