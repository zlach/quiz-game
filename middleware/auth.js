const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {

    const token = req.header('x-auth-token');
    if (!token) {
        return res.status(401).json({ msg: 'Authorization not provided' });
    }
    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'));
        req.manager = decoded.manager;
        next();
    } catch (err) {
        res.status(401).json({msg: "Authorization denied"});
    }
}