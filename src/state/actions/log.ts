import { AppAction } from '../types';
import { Response } from '../../thedogsapi';

export type Log = AppAction<'Log', Response>;

type LogAction = 'added' | 'removed';

type Location = 'favourites' | 'likes' | 'dislikes';

export type LogInfo = Response & {
	image_id?: string | number;
	action?: LogAction;
	location?: Location;
	created_at?: string;
};

export const logInfo = (
	image_id: LogInfo['image_id'],
	action: LogInfo['action'],
	location: LogInfo['location'],
	created_at: LogInfo['created_at']
): LogInfo => ({
	image_id,
	action,
	location,
	created_at,
});

export const log = (log: LogInfo): Log => ({
	type: 'Log',
	payload: log,
});
