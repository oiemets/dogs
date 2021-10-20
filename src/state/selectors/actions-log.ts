import { createSelector } from 'reselect';
import { VoteResponse } from '../../thedogsapi';
import { AppState, Favourite } from '../types';
import { favouritesData, favouritesReady } from './favourites';
import { votesData, votesReady } from './votes';

export type LogItem = (VoteResponse | Favourite) & {
	type: 'favourite' | 'vote';
};

export const actionsLog = createSelector<
	AppState,
	Favourite[],
	VoteResponse[],
	LogItem[]
>(favouritesData, votesData, (favorites, votes) => [
	...favorites.map<LogItem>(favourite => ({ ...favourite, type: 'favourite' })),
	...votes.map<LogItem>(vote => ({ ...vote, type: 'vote' })),
]);

export const actionsLogReady = createSelector(
	favouritesReady,
	votesReady,
	(favorites, votes) => favorites && votes
);
