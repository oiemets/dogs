import { AddFavouritePayload, FavouriteID } from '../../thedogsapi';
import { AppAction, AppCommand, Favourite } from '../types';
import { convertFavoriteResponseToFavorite } from './utils';

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
	dispatch(
		favouritesLoadSuccess(convertFavoriteResponseToFavorite(favourites))
	);
};

export const addFavourite = (
	payload: AddFavouritePayload
): AppCommand => async (_, __, { api }) => {
	api.favourites().add(payload);
};

export const deleteFavourite = (id: FavouriteID): AppCommand => async (
	_,
	__,
	{ api }
) => {
	api.favourites().delete(id);
};
