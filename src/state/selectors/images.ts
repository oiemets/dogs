import {createSelector} from 'reselect';
import {AppSelector, AppState} from '../types';
import {isReady, getData} from '../resources';

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
