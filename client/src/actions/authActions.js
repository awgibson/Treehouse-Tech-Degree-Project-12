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

export const tokenConfig = getState => {
	// Get the JWT token from local storage
	const token = getState().auth.token;

	// Headers
	const config = {
		header: {
			'Content-type': 'application/json'
		}
	};

	// Checks for token and if there is one present, it is added to the headers
	if (token) {
		config.headers['x-auth-token'] = token;
	}

	return config;
};
