const express = require('express');
const router = express.Router();
const middleware = require('../../middleware');

const User = require('../../models/User');

// GET /api/user
// Return the currently logged in user's database information
router.get('/', middleware.validateLogin, (req, res, next) => {
	res
		.json(req.user)
		.status(200)
		.end();
});

// POST /api/user
// Creates a user
router.post('/', (req, res, next) => {
	User.create(req.body, err => {
		if (err) {
			next(err);
		} else {
			res
				.location('/')
				.status(201)
				.end();
		}
	});
});

// PUT /user
// Updates user's movie favorites
router.put('/favorites', middleware.validateLogin, (req, res, next) => {
	User.findByIdAndUpdate(
		req.user._id,
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
				res.status(204).end();
			}
		}
	);
});

module.exports = router;
