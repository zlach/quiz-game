const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');


const Manager = require('../../models/Manager');

router.get('/', auth, async (req, res) => {
    try {
        const manager = await Manager.findById(req.manager.id).select('-password');
        res.json(manager);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// login manager
router.post('/', async (req, res) => {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //     return res.status(400).json({
    //         errors: errors.array()
    //     });
    // }

    const { email, password } = req.body;
    try {
        let manager = await Manager.findOne({ email });
        if (!manager) {
            return res.status(400).json({ type: 'email' });
        }

        const isMatch = await bcrypt.compare(password, manager.password);

        if (!isMatch) {
            return res.status(400).json({ type: 'password' });
        }

        const payload = {
            manager: {
                id: manager.id
            }
        };
        jwt.sign(
            payload,
            config.get('jwtSecret'),
            { expiresIn: "10h" },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error'); // change format
    }
});

module.exports = router;