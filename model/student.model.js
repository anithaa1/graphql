const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    Name: String,
    Department: String,
    Age: Number
});

module.exports = mongoose.model('studentModel', studentSchema);
