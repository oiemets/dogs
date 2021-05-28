import { AppSelector, AppState } from '../types';
import { createSelector } from 'reselect';

export const logState: AppSelector<AppState['log']> = state => state.log;

export const logData = createSelector(logState, log => (log ? log : []));

export const getLatestLogId = createSelector(logData, log => {
	if (log.length > 0) {
		return log[log.length - 1].id;
	}
});
