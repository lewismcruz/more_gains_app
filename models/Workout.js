const mongoose = require("mongoose");
const { static } = require("express");

const Schema = mongoose.Schema;

//Create schema using exercises defined in seed.js
const ExerciseSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type:{
                type: String,
                trim: true,
                required: "Enter exercise category"
            },
            name: {
              type: String,
              trim: true,
              required: "Enter exercise name"
            },
            duration: {
                type: Number,
                required: "Enter duration of exercise"
            },
            weight: {
                type: Number,
                required: "Enter exercise weight"
            },
            sets: {
                type: Number,
                required: "Enter number of sets"
            },
            reps:{
                type: Number,
                required: "Enter exercise repetitions"
            },
            distance: {
                type: Number,
                required: "Enter distance"
            }
        }
    ]
});


const ExerciseModel = mongoose.model("ExerciseModel", ExerciseSchema);

module.exports = ExerciseModel;