import { AppSelector, AppState } from '../types';
import { createSelector } from 'reselect';
import { favouritesData } from './favourites';
import { votesData } from './votes';
import { LogInfo } from '../actions';

export const logState: AppSelector<AppState['log']> = state => state.log;

export const logData = createSelector(logState, log => (log ? log : []));

export const favouritesToLog = createSelector(favouritesData, favourites =>
	favourites.map(
		({ image_id, created_at }): LogInfo => ({
			image_id,
			created_at,
			location: 'favourites',
			action: 'added',
		})
	)
);

export const votesToLog = createSelector(votesData, votes =>
	votes.map(
		({ image_id, created_at, value }): LogInfo => ({
			image_id,
			created_at,
			location: value === 0 ? 'dislikes' : 'likes',
			action: 'added',
		})
	)
);

export const getLog = createSelector(
	logData,
	favouritesToLog,
	votesToLog,
	(log, favourites, votes) => {
		return [...log, ...favourites, ...votes];
	}
);

export const getLatestLogId = createSelector(logData, log => {
	if (log.length > 0) {
		return log[log.length - 1].id;
	}
});
