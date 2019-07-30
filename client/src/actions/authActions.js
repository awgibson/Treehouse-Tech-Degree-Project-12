import axios from 'axios';
import { returnErrors } from './errorActions';

import {
	USER_LOADED,
	USER_LOADING,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT_SUCCESS,
	REGISTER_SUCCESS,
	REGISTER_FAIL
} from './types';

// See if JWT token exists and load user if it does exist

export const loadUser = () => (dispatch, getState) => {
	// Loading the user
	dispatch({ type: USER_LOADING });

	axios
		.get('/api/user', tokenConfig(getState))
		.then(res =>
			dispatch({
				type: USER_LOADED,
				payload: res.data
			})
		)
		.catch(err => {
			dispatch(returnErrors(err.response.data, err.response.status));
			dispatch({
				type: AUTH_ERROR
			});
		});
};

// Register user
export const register = ({ name, emailAddress, password }) => dispatch => {
	// Headers for request
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};

	// Body....changes the javascript object to a JSON format for the database request
	const body = JSON.stringify({ name, emailAddress, password });

	axios
		.post('/api/user/register', body, config)
		.then(res =>
			dispatch({
				type: REGISTER_SUCCESS,
				payload: res.data
			})
		)
		.catch(err => {
			dispatch(
				returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL')
			);
			dispatch({
				type: REGISTER_FAIL
			});
		});
};

// Login
export const login = ({ emailAddress, password }) => dispatch => {
	// Headers for request
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};

	// Body....changes the javascript object to a JSON format for the database request
	const body = JSON.stringify({ emailAddress, password });

	axios
		.post('/api/user/auth', body, config)
		.then(res =>
			dispatch({
				type: LOGIN_SUCCESS,
				payload: res.data
			})
		)
		.catch(err => {
			dispatch(
				returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL')
			);
			dispatch({
				type: LOGIN_FAIL
			});
		});
};

// Logout
export const logout = () => {
	return {
		type: LOGOUT_SUCCESS
	};
};

// Configure the headers and token
export const tokenConfig = getState => {
	// Get the JWT token from local storage
	const token = getState().auth.token;

	console.log(token);

	// Headers
	const config = {
		headers: {
			'Content-type': 'application/json'
		}
	};

	// Checks for token and if there is one present, it is added to the headers
	if (token) {
		config.headers['x-auth-token'] = token;
	}

	return config;
};
