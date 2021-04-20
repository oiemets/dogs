import { combineReducers } from 'redux';
import { breeds } from './breeds';
import { AppState } from '../types';

export default combineReducers<AppState>({
  breeds
});