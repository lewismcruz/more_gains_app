const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// uncomment once app works locally, is tested, and deployed to heroku
//const PORT = process.env.PORT || 3000;

// use for local testing of site before pre-deployment
const PORT = 3000;

const User = require("./workoutUserModel.js");
const { db } = require("./workoutUserModel.js");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/custommethoddb", { useNewUrlParser: true));

app.post("/submit", ({body}, res) => {
    // Creates a new workoutUser using req.body
    const workoutUser = new WorkoutUser(body);
    workoutUser.addNewExercise();
    workoutUser.getExerciseStats();
    workoutUser.loadPreviousWorkout();

    //
    WorkoutUser.create(workoutUser)
      .then(dbWorkoutUser => {
          res.json(dbWorkoutUser);
        })
        .catch(err => {
            res.json(err);
        });
});

// We need to create our routes to addNewExercise(), getExerciseStats(), and loadPreviousWorkout();








// This starts our server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);

});

