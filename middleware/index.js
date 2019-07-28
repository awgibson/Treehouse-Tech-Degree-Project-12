const config = require('config');
const jwt = require('jsonwebtoken');

function auth(req, res, next) {
	const token = req.header('x-auth-token');

	//Check for token
	if (!token) {
		const err = new Error('No token, please login again.');
		err.status = 401;
		return next(err);
	}

	try {
		// Verify token
		const decoded = jwt.verify(token, config.get('jwtSecret'));
		// Add user from jwt payload
		req.user = decoded;
		next();
	} catch (err) {
		err.message = 'Login token is invalid. Please login again.';
		err.status = 401;
		return next(err);
	}
}

module.exports.auth = auth;
