import { Action } from '../actions';
import { Favourite } from '../../thedogsapi';
import { loading, create, setData, ready } from '../resources';
import { AppState } from '../types';

export const favourites = (state: AppState['favourites'], action: Action) => {
	const ensured = ensure(state);
	switch (action.type) {
		case 'FavouritesLoadStart':
			return loading(ensured);
		case 'FavouritesLoadSuccess':
			return ready(setData(ensured, action.payload));
		default:
			return ensured;
	}
};

const ensure = (state: AppState['favourites']) => {
	if (state) {
		return state;
	}
	return create<Favourite[]>([]);
};
