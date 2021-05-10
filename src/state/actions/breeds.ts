import { Breed } from '../../thedogsapi';
import { AppAction, AppCommand } from '../types';

export type BreedsLoadStart = AppAction<'BreedsLoadStart'>;

export type BreedsLoadSuccess = AppAction<'BreedsLoadSuccess', Breed[]>;

export const breedsLoadStart = (): BreedsLoadStart => ({
	type: 'BreedsLoadStart',
});

export const breedsLoadSuccess = (breeds: Breed[]): BreedsLoadSuccess => ({
	type: 'BreedsLoadSuccess',
	payload: breeds,
});

export const loadBreeds = (): AppCommand => async (dispatch, _, { api }) => {
	dispatch(breedsLoadStart());
	const breeds = await api.breeds().list();
	dispatch(breedsLoadSuccess(breeds));
};
