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

// @@route  POST /api/user/auth
// @@desc   Authorizes user and creates a JWT token
// @@access Public
router.post('/auth', (req, res, next) => {
	// Simple form verification
	if (!req.body.emailAddress || !req.body.password) {
		const err = new Error('Please provide both an email address and password');
		return next(err);
	}

	// Runs the authenticate function in the User model
	User.authenticate(req.body.emailAddress, req.body.password, (err, data) => {
		if (err) return next(err);
		res.json(data);
	});
});

// @@ POST   /api/user/register
// @@ desc   Creates a user
// @@access  Public
router.post('/register', (req, res, next) => {
	// destruction from the body
	const { name, emailAddress, password } = req.body;

	// Create the user
	User.create({ name, emailAddress, password }, (err, user) => {
		// handle errors
		if (err) {
			return next(err);
		} else {
			// If tehre are no errors, create a jwt token to return after user is created for persistant login
			jwt.sign(
				{ id: user.id },
				config.get('jwtSecret'),
				{ expiresIn: 3600 },
				(err, token) => {
					// Handle errors from token creation
					if (err) return next(err);

					// Send back the newly registered user and the the access token
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

// @@ PUT    /user/favorites/add
// @@ desc   Updates user's movie favorites
// @@access  Private
router.put('/favorites/add', middleware.auth, (req, res, next) => {
	// Use he find and update method
	// the addToSet config is used to add the movie to the array of movie favorites if it doesn't already exist
	// this prevents dupes.
	User.findByIdAndUpdate(
		req.user.id,
		{ $addToSet: { favoriteMovies: req.body.favoriteMovies } },
		{ new: true },
		(err, user) => {
			// Sends errors to global handler
			if (err) {
				next(err);
			} else if (!user) {
				// Error if user is not found
				const err = new Error('User does not exist');
				err.status = 404;
				next(err);
			} else {
				// Send back the newly updated user favorites list on success
				res
					.json(user.favoriteMovies)
					.status(204)
					.end();
			}
		}
	);
});

// @@ PUT    /user/favorites/remove
// @@ desc   Deletes a movie from the favorites
// @@access  Private
router.put('/favorites/remove', middleware.auth, (req, res, next) => {
	// This runs exactly as the add to favorites route except $pull removes the item from the array.
	User.findByIdAndUpdate(
		req.user.id,
		{ $pull: { favoriteMovies: req.body.favoriteMovies } },

		(err, user) => {
			if (err) {
				next(err);
			} else if (!user) {
				const err = new Error('User does not exist');
				err.status = 404;
				next(err);
			} else {
				// The new favorites list is sent back.
				// filter is used to remove the movie from the list of the returned data
				res
					.json(
						user.favoriteMovies.filter(
							movie => movie !== req.body.favoriteMovies
						)
					)
					.status(204)
					.end();
			}
		}
	);
});

module.exports = router;
