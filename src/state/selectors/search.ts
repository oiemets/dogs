import { createSelector } from 'reselect';
import { AppSelector, AppState } from '../types';
import { isReady, getData } from '../resources';
import { breedsData } from '../selectors';

export const search: AppSelector<AppState['search']> = state => state.search;

export const searchReady = createSelector(search, search => isReady(search));

export const searchData = createSelector(search, search =>
	search ? getData(search) : []
);

export const searchDataWithImages = createSelector(
	searchData,
	breedsData,
	(search, breeds) =>
		search.map(i => ({
			...i,
			image: breeds.find(({ id }) => id === i.id)?.image,
		}))
);
