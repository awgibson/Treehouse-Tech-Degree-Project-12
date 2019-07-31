import {
	GET_FAVORITES,
	FAVORITES_LOADING,
	UPDATE_FAVORITES
} from '../actions/types';

const initialState = {
	loading: false
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_FAVORITES:
		case UPDATE_FAVORITES:
			return {
				data: action.payload,
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
