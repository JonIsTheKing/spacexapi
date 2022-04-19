const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    shortform: { type: String, required: [true, 'Please provide a question'] }, 
    fullform: { type: String, required: [true, 'Please provide option A'] }
});

const Abb = mongoose.model('abbrevations', UserSchema);

module.exports = Abb;