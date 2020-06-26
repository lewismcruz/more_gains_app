const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create schema using exercises defined in seed.js
const workoutSchema = new workoutSchema({
    exercise1: {
        name: "Bicep Curl",
        type: String,
        weight:  ,
        sets:  ,
        reps:   ,
        duration: ,
        trim: true,
        required: "First Name is Required"
    },

    exercise2: {
        name: "Lateral Pull",
        type: String,
        weight:  ,
        sets:  ,
        reps:   ,
        duration: ,
        trim: true,
        required: "Last Name is Required"
    },
    exercise3: {
        name: "Push Press",
        type: String,
        weight:  ,
        sets:  ,
        reps:   ,
        duration: ,
        trim: true,
        required: "Last Name is Required"
    },
    exercise4: {
        name: "Running",
        type: String,
        weight:  ,
        sets:  ,
        reps:   ,
        duration: ,
        distance:  ,
        trim: true,
        required: "Last Name is Required"
    },
    exercise5: {
        name: "Bench Press",
        type: String,
        weight:  ,
        sets:  ,
        reps:   ,
        duration: ,
        trim: true,
        required: "Last Name is Required"
    },
    exercise6: {
        name: "Quad Press",
        type: String,
        weight:  ,
        sets:  ,
        reps:   ,
        duration: ,
        trim: true,
        required: "Last Name is Required"
    },
    exercise7: {
        name: "Military Press",
        type: String,
        weight:  ,
        sets:  ,
        reps:   ,
        duration: ,
        trim: true,
        required: "Last Name is Required"
    },
    exercise8: {
        name: "Bench",
        type: String,
        weight:  ,
        sets:  ,
        reps:   ,
        duration: ,
        trim: true,
        required: "Last Name is Required"
    },
});



workoutSchema.methods.addNewExercise = function() {this}

// var id

//
   const workoutUserModel = mongoose.model("workoutUserModel", workoutSchema);



module.exports = workoutUserModel;