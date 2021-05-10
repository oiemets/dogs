import { Action } from '../actions';
import { AppState } from '../types';
import { loading, create, setData, ready } from '../resources';
import { BreedSearchResult } from '../../thedogsapi';

export const search = (state: AppState['search'], action: Action) => {
	const ensured = ensure(state);
	switch (action.type) {
		case 'SearchLoadStart':
			return loading(ensured);
		case 'SearchLoadSuccess':
			return ready(setData(ensured, action.payload));
		default:
			return ensured;
	}
};

const ensure = (state: AppState['search']) => {
	if (state) {
		return state;
	}
	return create<BreedSearchResult[]>([]);
};
