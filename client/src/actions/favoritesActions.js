import {
	GET_FAVORITES,
	FAVORITES_LOADING,
	UPDATE_FAVORITES,
	DELETE_FAVORITE
} from './types';
import axios from 'axios';

import store from '../store';

// Add a movie to the user's favorites
export const updateFavorites = movie => dispatch => {
	dispatch(setItemsLoading);
	// Headers for request
	const config = {
		headers: {
			'Content-Type': 'application/json',
			'x-auth-token': store.getState().auth.token
		}
	};

	// Body....changes the javascript object to a JSON format for the database request
	const body = {
		favoriteMovies: movie
	};

	axios
		.put('api/user/favorites/add', JSON.stringify(body), config)
		.then(res =>
			dispatch({
				type: UPDATE_FAVORITES,
				payload: res.data
			})
		)
		.catch(err =>
			dispatch({
				type: UPDATE_FAVORITES,
				payload: false
			})
		);
};

// Delete a movie to the user's favorites
export const deleteFavorite = movie => dispatch => {
	dispatch(setItemsLoading);

	// Headers for request
	const config = {
		headers: {
			'Content-Type': 'application/json',
			'x-auth-token': store.getState().auth.token
		}
	};

	// Body....changes the javascript object to a JSON format for the database request
	const body = {
		favoriteMovies: movie
	};

	axios
		.put('api/user/favorites/remove', JSON.stringify(body), config)
		.then(res =>
			dispatch({
				type: DELETE_FAVORITE,
				payload: res.data
			})
		)
		.catch(err =>
			dispatch({
				type: UPDATE_FAVORITES,
				payload: false
			})
		);
};

export const getFavorites = movie => dispatch => {
	dispatch(setItemsLoading);
	// Headers for request
	const config = {
		headers: {
			'Content-Type': 'application/json',
			'x-auth-token': store.getState().auth.token
		}
	};

	axios
		.get('api/user/', null, config)
		.then(res =>
			dispatch({
				type: GET_FAVORITES,
				payload: res.data.user.favoriteMovies
			})
		)
		.catch(err =>
			dispatch({
				type: GET_FAVORITES,
				payload: false
			})
		);
};

export const setItemsLoading = () => {
	return {
		type: FAVORITES_LOADING
	};
};
