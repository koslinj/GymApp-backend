const mongoose = require('mongoose');

const TrainingSchema = new mongoose.Schema({
    title: {
        type: String
    },
    when: {
        type: Date,
        required: true
    }
});

const Training = mongoose.model('Training', TrainingSchema);

module.exports = Training;