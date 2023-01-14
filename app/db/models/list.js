const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
    exercise_name: {
        type: String,
        required: true
    }
});

const List = mongoose.model('List', ListSchema);

module.exports = List;