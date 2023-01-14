const mongoose = require('mongoose');

const ExerciseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    sets: {
        type: Number,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    weight: {
        type: Number
    },
    info: {
        type: String
    },
    training_id: {
        type: String,
        required: true
    },
    when: {
        type: Date,
        required: true
    }
});

const Exercise = mongoose.model('Exercise', ExerciseSchema);

module.exports = Exercise;