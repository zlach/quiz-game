const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const Manager = require('../../models/Manager');

// register manager
router.post('/', async (req, res) => {
    const { code, email, password } = req.body;

    if (code !== config.get('secretCode')){
        return res.status(400).json({type: 'code'});
    }
    try {
        let manager = await Manager.findOne({ email });
        if (manager) {
            return res.status(400).json({ type: 'email' })
        }

        manager = new Manager({
            email,
            password
        });
        const salt = await bcrypt.genSalt(10);

        manager.password = await bcrypt.hash(password, salt);

        await manager.save();

        const payload = {
            manager: {
                id: manager.id
            }
        };
        jwt.sign(
            payload,
            config.get('jwtSecret'),
            { expiresIn: 999999 },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error'); // todo: change format
    }
});

module.exports = router;