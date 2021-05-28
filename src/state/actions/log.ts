import { AppAction } from '../types';
import { Response } from '../../thedogsapi';

export type Log = AppAction<'Log', Response>;

export const log = (log: Response): Log => ({
	type: 'Log',
	payload: log,
});
