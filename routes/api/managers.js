const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const Manager = require('../../models/Manager');

// register manager
router.post('/', [
    check('name', 'Name is Required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password of 6 or more characters').isLength({ min: 6 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }

    const { name, email, password } = req.body;
    try {
        let manager = await Manager.findOne({ email });
        if (manager) {
            return res.status(400).json({ errors: [{ msg: "Please try another email address" }] })
        }

        manager = new Manager({
            name,
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
        res.status(500).send('Server error')
    }
});

module.exports = router;