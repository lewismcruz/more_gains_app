const mongoose = require("mongoose");

const ExerciseSchema = mongoose.Schema;

// Create schema using exercises defined in seed.js
const ExerciseSchema = new ExerciseSchema({
   
});



ExerciseSchema.methods.addNewExercise = function() {
    this.addNewExercise = `${this.exercises};`
    return this.addNewExercise;
}

ExerciseSchema.methods.getExerciseStats = function() {
    this.
    return this.getExerciseStats;
}

ExerciseSchema.methods.loadPreviousWorkout = function() {
    this.
    return this.loadPreviousWorkout;
}


const ExerciseModel = mongoose.model("ExerciseModel", ExerciseSchema);


module.exports = ExerciseModel;