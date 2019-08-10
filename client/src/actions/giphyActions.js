import { GET_GIPHY, GIPHY_LOADING } from './types';
import axios from 'axios';

export const getGiphy = search => dispatch => {
	dispatch(setItemsLoading());
	// hit the api for giphy
	axios
		.get(`/request/giphy/${search} movie`)

		.then(res =>
			// Add data to store
			dispatch({
				type: GET_GIPHY,
				payload: res
			})
		)
		.catch(err =>
			dispatch({
				type: GET_GIPHY,
				payload: false
			})
		);
};

export const setItemsLoading = () => {
	return {
		type: GIPHY_LOADING
	};
};
