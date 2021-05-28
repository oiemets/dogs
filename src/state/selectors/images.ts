import { createSelector } from 'reselect';
import { AppSelector, AppState } from '../types';
import { isReady, getData } from '../resources';
import { searchData } from './search';

export const images: AppSelector<AppState['images']> = state => state.images;

export const imagesReady = createSelector(images, images => isReady(images));

export const imagesData = createSelector(images, images =>
	images ? getData(images) : []
);

export const getImagesWithNames = createSelector(imagesData, images =>
	images.map(i => ({
		url: i.url,
		name: i.breeds[0].name,
	}))
);

export const getImagesFirstIndex = createSelector(imagesData, images =>
	images[0] ? images[0].breeds : []
);

export const getImagesBreedInfo = createSelector(
	getImagesFirstIndex,
	searchData,
	(breed, search) => {
		if (breed[0]) {
			return { ...breed[0] };
		}

		if (search[0]) {
			return { ...search[0] };
		}
	}
);

export const getRandomImageUrlAndId = createSelector(imagesData, images =>
	images[0] ? { id: images[0].id, url: images[0].url } : {}
);
