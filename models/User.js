const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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

UserSchema.pre('save', next => {
	const user = this;

	bcrypt.hash(user.password, 10, (err, hash) => {
		// Store hash in your password DB.
		if (err) return next(err);

		user.password = hash;
		next();
	});
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
