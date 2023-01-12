const mongoose = require('mongoose');

const TrainingSchema = new mongoose.Schema({
    title: {
        type: String
    },
    when: {
        type: String,
        required: true
    }
});

const Training = mongoose.model('Training', TrainingSchema);

module.exports = Training;