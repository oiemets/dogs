import { Action } from '../actions';
import { AppState } from '../types';
import { loading, create, setData, ready } from '../resources';
import { Breed } from '../../thedogsapi';


export const breeds = (
  state: AppState['breeds'], 
  action: Action
  ) => {
  const ensured = ensure(state);
  switch(action.type) {
    case 'BreedsLoadStart':
      return loading(ensured);
    case 'BreedsLoadSuccess':
      return ready(setData(ensured, action.payload));
    default: 
      return ensured;
  }
};

const ensure = (state: AppState['breeds']) => {
  if (state) {
    return state;
  }
  return create<Breed[]>([]);
};