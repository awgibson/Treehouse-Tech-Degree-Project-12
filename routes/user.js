const express = require('express');
const router = express.Router();

const User = require('../models/User');

// GET /user
// Return the currently logged in user's database information
router.get('/', (req, res, next) => {
	res
		.json('The user route!')
		.status(200)
		.end();
});

// PORT /user
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
router.put('/favorites', (req, res, next) => {
	User.findOneAndUpdate(
		req.body.emailAddress,
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
