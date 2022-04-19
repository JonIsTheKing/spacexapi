const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    que: {
        type: String,
        required: [true, 'Please enter a question']
    },
    opt: {
        type: [String],
        required: [true, 'Please provide options']
    },
    key: {
        type: Number,
        required: [true, 'Please provide a key']
    },
    topic: {
        type: Number,
        required: [true, 'Please provide a topic number']
    },
    org: {
        type: String
    },
    cadre: {
        type: String
    },
    year: {
        type: Number
    }
});

const User = mongoose.model('archieve', UserSchema);

module.exports = User;