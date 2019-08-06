const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const config = require('config');
const jwt = require('jsonwebtoken');

// Schema for the Users
// Validation is used on fullName, emailAddress, password
const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Name is required']
	},
	emailAddress: {
		type: String,
		required: [true, 'E-mail address is required'],
		unique: true,
		trim: true
	},
	password: {
		type: String,
		required: [true, 'Password is required']
	},
	favoriteMovies: {
		type: Array
	}
});

UserSchema.pre('save', function(next) {
	const user = this;

	bcrypt.hash(user.password, 10, (err, hash) => {
		// Store hash in your password DB.
		if (err) return next(err);

		user.password = hash;

		next();
	});
});

UserSchema.statics.authenticate = function(email, password, callback) {
	// Find the user by the unique email address
	this.findOne({ emailAddress: email }).exec(function(err, user) {
		// where it was called. Same goes for no user being found in the database
		if (err) {
			return callback(err);
		} else if (!user) {
			const err = new Error('User not found.');
			err.status = 401;
			return callback(err);
		}

		// Use bcrypt's compare method
		bcrypt.compare(password, user.password, function(err, result) {
			// If it returns a result, authentication passed and sends the user to the
			// callback function, the since there is no error in this case, null is passed as the
			// first parameter
			if (result) {
				jwt.sign(
					{ id: user.id },
					config.get('jwtSecret'),
					{ expiresIn: 3600 },
					(err, token) => {
						if (err) callback(err);
						const data = {
							token,
							user: {
								id: user.id,
								name: user.name,
								emailAddress: user.emailAddress,
								favoriteMovies: user.favoriteMovies
							}
						};

						return callback(null, data);
					}
				);
			} else {
				// If there is no result, that means the passwords did not match.
				// Throw a 401 error and pass to the callback
				const err = new Error('Password is incorrect.');
				err.status = 401;
				return callback(err);
			}
		});
	});
};

const User = mongoose.model('User', UserSchema);
module.exports = User;
