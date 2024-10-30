const jwt = require('jsonwebtoken');

// Verify JWT Token
const verifyToken = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token || !token.startsWith('Bearer ')) {
        return res
            .status(401)
            .json({
                message: 'Access denied. No token provided or invalid format.',
            });
    }

    try {
        const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET); // Extract the token after 'Bearer '
        req.user = decoded;
        next();
    } catch (err) {
        res.status(400).json({ message: 'Invalid token.' });
    }
};

// Check if User is Admin
const adminRole = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Access denied. Admins only.' });
    }
    next();
};

const hrRole = (req, res, next) => {
    if (req.user.role !== 'hr') {
        return res.status(403).json({ message: 'Access denied. hr only.' });
    }
    next();
};

// Check if User is HR or Admin
const hrOrAdmin = (req, res, next) => {
    if (req.user.role !== 'hr' && req.user.role !== 'admin') {
        return res
            .status(403)
            .json({ message: 'Access denied. HR or Admin only.' });
    }
    next();
};

module.exports = { verifyToken, adminRole, hrOrAdmin };
