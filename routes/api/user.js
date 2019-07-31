const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../../models/User');
const middleware = require('../../middleware/');

// @@route  GET /api/user
// @@desc   Returns user information
// @@access Private
router.get('/', middleware.auth, (req, res, next) => {
	const { id } = req.user;

	User.findById(id, '-password', (err, user) => {
		if (err) return next(err);

		res.json(user);
	});
});

// POST /api/user/auth
// authorizes user
router.post('/auth', (req, res, next) => {
	if (!req.body.emailAddress || !req.body.password) {
		const err = new Error('Please provide both an email address and password');
		return next(err);
	}

	User.authenticate(req.body.emailAddress, req.body.password, (err, data) => {
		if (err) return next(err);
		res.json(data);
	});
});

// @@ POST /api/user/register
// @@ desc Creates a user
router.post('/register', (req, res, next) => {
	const { name, emailAddress, password } = req.body;
	User.create({ name, emailAddress, password }, (err, user) => {
		if (err) {
			return next(err);
		} else {
			jwt.sign(
				{ id: user.id },
				config.get('jwtSecret'),
				{ expiresIn: 3600 },
				(err, token) => {
					if (err) return next(err);

					return res.json({
						success: true,
						token,
						user: {
							id: user.id,
							name: user.name,
							emailAddress: user.emailAddress
						}
					});
				}
			);
		}
	});
});

// PUT /user/favorites
// Updates user's movie favorites
router.put('/favorites', middleware.auth, (req, res, next) => {
	console.log(req);
	User.findByIdAndUpdate(
		req.user.id,
		{ $addToSet: { favoriteMovies: req.body.favoriteMovies } },
		{ new: true },
		(err, user) => {
			if (err) {
				next(err);
			} else if (!user) {
				const err = new Error('User does not exist');
				err.status = 404;
				next(err);
			} else {
				res
					.json(user.favoriteMovies)
					.status(204)
					.end();
			}
		}
	);
});

module.exports = router;
