const mongoose = require('mongoose');

const ManagerSchema = new mongoose.Schema({
    // name: {
    //     type: String,
    //     required: true
    // },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = Manager = mongoose.model('manager', ManagerSchema);