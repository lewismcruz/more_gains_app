const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// uncomment once app works locally, is tested, and deployed to heroku
//const PORT = process.env.PORT || 3000;

// use for local testing of site before pre-deployment
const PORT = 3000;

//const User = require("./ExerciseModel.js");
const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { useNewUrlParser: true});


app.use(require("./routes/apiroutes"));
app.use(require("./routes/htmlroutes"));


// This starts our server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);

});

