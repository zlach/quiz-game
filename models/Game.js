const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
    manager: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'manager'
    },
    gameName: {
        type: String,
        required: false
    },
    rounds: [
        [
            {
                parts: {
                    type: Number,
                    required: true,
                    default: 1
                },
                pointsPerPart: {
                    type: Number,
                    required: true,
                    default: 1
                }
            }
        ]
    ],
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = Game = mongoose.model('game', GameSchema);