import { combineReducers } from 'redux';
import { breeds } from './breeds';
import { AppState } from '../types';
import { images } from './images';

export default combineReducers<AppState>({
  breeds,
  images
});