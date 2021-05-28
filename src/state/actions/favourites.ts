import { Favourite, AddFavouritePayload, FavouriteID } from '../../thedogsapi';
import { AppAction, AppCommand } from '../types';
import { log } from './log';

export type FavouritesLoadStart = AppAction<'FavouritesLoadStart'>;

export type FavouritesLoadSuccess = AppAction<
	'FavouritesLoadSuccess',
	Favourite[]
>;

export const favouritesLoadStart = (): FavouritesLoadStart => ({
	type: 'FavouritesLoadStart',
});

export const favouritesLoadSuccess = (
	favourites: Favourite[]
): FavouritesLoadSuccess => ({
	type: 'FavouritesLoadSuccess',
	payload: favourites,
});

export const loadFavourites = (): AppCommand => async (
	dispatch,
	_,
	{ api }
) => {
	dispatch(favouritesLoadStart());
	const favourites = await api.favourites().list();
	dispatch(favouritesLoadSuccess(favourites));
};

export const addFavourite = (
	payload: AddFavouritePayload
): AppCommand => async (dispatch, __, { api }) => {
	const add = await api.favourites().add(payload);
	dispatch(log(add));
};

export const deleteFavourite = (id: FavouriteID): AppCommand => async (
	_,
	__,
	{ api }
) => {
	api.favourites().delete(id);
};
