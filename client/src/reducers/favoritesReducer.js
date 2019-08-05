import {
	GET_FAVORITES,
	FAVORITES_LOADING,
	UPDATE_FAVORITES,
	DELETE_FAVORITE
} from '../actions/types';

const initialState = {
	loading: false
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_FAVORITES:
		case UPDATE_FAVORITES:
		case DELETE_FAVORITE:
			return {
				data: action.payload.sort(),
				loading: false
			};
		case FAVORITES_LOADING:
			return {
				...state,
				loading: true
			};
		default:
			return state;
	}
}
