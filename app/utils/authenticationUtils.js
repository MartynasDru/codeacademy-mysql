const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch (e) {
        res.json({
            message: 'Invalid token'
        })
    }
};

module.exports = {
    verifyToken
}