const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
    manager: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'manager'
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = Game = mongoose.model('game', GameSchema);