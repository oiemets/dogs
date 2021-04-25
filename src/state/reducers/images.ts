import { Action } from '../actions';
import { AppState } from '../types';
import { loading, create, ready, setData } from '../resources';
import { PublicImage } from '../../thedogsapi';


export const images = (
  state: AppState['images'],
  action: Action
) => {
  const ensured = ensure(state);
  switch (action.type) {
    case 'ImagesLoadStart':
      return loading(ensured);
    case 'ImagesLoadSuccess':
      return ready(setData(ensured, action.payload));
    default:
      return ensured;
  }
};

const ensure = (state: AppState['images']) => {
  if (state) {
    return state;
  }
  return create<PublicImage[]>([]);
}