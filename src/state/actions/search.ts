import { AppAction, AppCommand } from '../types';
import { BreedSearchResult } from '../../thedogsapi';

export type SearchLoadStart = AppAction<'SearchLoadStart'>;

export type SearchLoadSuccess = AppAction<
	'SearchLoadSuccess',
	BreedSearchResult[]
>;

export const searchLoadStart = (): SearchLoadStart => ({
	type: 'SearchLoadStart',
});

export const searchLoadSuccess = (
	search: BreedSearchResult[]
): SearchLoadSuccess => ({
	type: 'SearchLoadSuccess',
	payload: search,
});

export const searchBreedByName = (name: string): AppCommand => async (
	dispatch,
	_,
	{ api }
) => {
	dispatch(searchLoadStart());
	const search = await api.search().searchByName(name);
	dispatch(searchLoadSuccess(search));
};
