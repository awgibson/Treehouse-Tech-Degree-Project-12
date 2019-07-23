import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import soundtrackReducer from './soundtrackReducer';

export default combineReducers({
	movie: movieReducer,
	soundtrack: soundtrackReducer
});
