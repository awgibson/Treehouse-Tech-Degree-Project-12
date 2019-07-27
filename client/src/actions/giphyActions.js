import { GET_GIPHY, GIPHY_LOADING } from './types';
import axios from 'axios';
import keys from '../config/keys';

export const getGiphy = search => dispatch => {
	dispatch(setItemsLoading());
	axios
		.get(`/request/giphy/${search} movie`)

		.then(res =>
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
