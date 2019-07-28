import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import soundtrackReducer from './soundtrackReducer';
import giphyReducer from './giphyReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';

export default combineReducers({
	movie: movieReducer,
	soundtrack: soundtrackReducer,
	giphy: giphyReducer,
	error: errorReducer,
	auth: authReducer
});
