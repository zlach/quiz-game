const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const Game = require('../../models/Game');
const Manager = require('../../models/Manager');

router.get('/', auth, async (req, res) => {
    try {
        const games = await Game.find({ manager: req.manager.id }).sort({ date: -1 });// reverse order
        // if (games.length === 0) {
        //     return res.status(400).json({ type: "empty" });
        // }
        res.send(games);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.post('/', auth, async (req, res) => {
    try {
        const newGame = new Game({ ...req.body, manager: req.manager.id });
        newGame.save();
        // const newGame = Game.create({...req.body, manager: req.manager.id});
        res.json(newGame);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error'); // todo
    }
});

module.exports = router;
