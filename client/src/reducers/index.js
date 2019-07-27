import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import soundtrackReducer from './soundtrackReducer';
import giphyReducer from './giphyReducer';

export default combineReducers({
	movie: movieReducer,
	soundtrack: soundtrackReducer,
	giphy: giphyReducer
});
