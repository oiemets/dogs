import { Action } from '../actions';
import { AppState } from '../types';
import { create, loading, setData, ready } from '../resources';
import { VoteResponse } from '../../thedogsapi';

export const votes = (state: AppState['votes'], action: Action) => {
	const ensured = ensure(state);
	switch (action.type) {
		case 'VotesLoadStart':
			return loading(ensured);
		case 'VotesLoadSuccess':
			return ready(setData(ensured, action.payload));
		default:
			return ensured;
	}
};

const ensure = (state: AppState['votes']) => {
	if (state) {
		return state;
	}
	return create<VoteResponse[]>([]);
};
