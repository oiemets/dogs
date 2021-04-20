import { Action } from '../actions';
import { AppState } from '../types';


export const breeds = (
  state: AppState['breeds'] = [], 
  action: Action
  ) => {
  switch(action.type) {
    case 'BreedsLoadStart':
      return [];
    case 'BreedsLoadSuccess':
      return action.payload;
    default: 
      return state;
  }
};