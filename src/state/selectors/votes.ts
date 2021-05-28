import { createSelector } from 'reselect';
import { AppSelector, AppState } from '../types';
import { isReady, getData } from '../resources';

export const votes: AppSelector<AppState['votes']> = state => state.votes;

export const votesReady = createSelector(votes, votes => isReady(votes));

export const votesData = createSelector(votes, votes =>
	votes ? getData(votes) : []
);
