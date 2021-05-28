import { createSelector } from 'reselect';
import { AppSelector, AppState } from '../types';
import { isReady, getData } from '../resources';
import { getRandomImageUrlAndId } from './images';

export const favourites: AppSelector<AppState['favourites']> = state =>
	state.favourites;

export const favouritesReady = createSelector(favourites, favourites =>
	isReady(favourites)
);

export const favouritesData = createSelector(favourites, favourites =>
	favourites ? getData(favourites) : []
);

export const getRandomImageFavouriteId = createSelector(
	getRandomImageUrlAndId,
	favouritesData,
	(image, favourites) => {
		const favourite = favourites.find(f => f.image_id === image.id);
		if (favourite) {
			return favourite.id;
		}
	}
);
