import { createSelector } from 'reselect';
import { AppSelector, AppState } from '../types';
import { isReady, getData } from '../resources';

export const breeds: AppSelector<AppState['breeds']> = state => state.breeds;

export const breedsReady = createSelector(
  breeds,
  breeds => isReady(breeds)
);

export const breedsData = createSelector(
  breeds,
  breeds => breeds ? getData(breeds) : []
);

export const getBreedNames = createSelector(
  breedsData,
  breeds => breeds.map(breed => breed.name)
);

export const getBreedsImages = createSelector(
  breedsData,
  breeds => breeds.map(breed => breed.image?.url)
);

export const getBreedsIds = createSelector(
  breedsData,
  breeds => breeds.map(breed => breed.id)
);