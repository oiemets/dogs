import { combineReducers } from 'redux';
import { AppState } from '../types';
import { breeds } from './breeds';
import { images } from './images';
import { search } from './search';

export default combineReducers<AppState>({
	breeds,
	images,
	search,
});
