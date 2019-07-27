import { GET_GIPHY, GIPHY_LOADING } from '../actions/types';

const initialState = {
	loading: false
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_GIPHY:
			return {
				...action.payload,
				loading: false
			};
		case GIPHY_LOADING:
			return {
				...state,
				loading: true
			};
		default:
			return state;
	}
}
