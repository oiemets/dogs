import { FavouriteResponse } from '../../thedogsapi';
import { Favourite } from '../types';

export const convertFavoriteResponseToFavorite = (
	response: FavouriteResponse[]
): Favourite[] => response.map(favourite => ({ ...favourite, value: 1 }));
