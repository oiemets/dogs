import { AppState } from '../types';
import { Action } from '../actions';

export const log = (state: AppState['log'], action: Action) => {
	const ensured = ensure(state);
	switch (action.type) {
		case 'Log':
			return [...ensured, action.payload];
		default:
			return ensured;
	}
};

const ensure = (state: AppState['log']) => {
	if (state) {
		return state;
	}
	return [];
};
