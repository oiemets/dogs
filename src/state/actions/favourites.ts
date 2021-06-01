import { Favourite, AddFavouritePayload, FavouriteID } from '../../thedogsapi';
import { AppAction, AppCommand } from '../types';
import { log, logInfo } from './log';
import { currentIsoDate } from '../../utils';

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
	const { image_id } = payload;
	dispatch(
		log({
			...add,
			...logInfo(image_id, 'added', 'favourites', currentIsoDate()),
		})
	);
};

export const deleteFavourite = (
	id: FavouriteID,
	image_id: string
): AppCommand => async (dispatch, __, { api }) => {
	const deleteResponse = await api.favourites().delete(id);
	dispatch(
		log({
			...deleteResponse,
			...logInfo(image_id, 'removed', 'favourites', currentIsoDate()),
		})
	);
};
