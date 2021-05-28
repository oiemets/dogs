import { combineReducers } from 'redux';
import { AppState } from '../types';
import { breeds } from './breeds';
import { images } from './images';
import { search } from './search';
import { favourites } from './favourites';
import { votes } from './votes';
import { log } from './log';

export default combineReducers<AppState>({
	breeds,
	images,
	search,
	favourites,
	votes,
	log,
});
