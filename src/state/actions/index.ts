import { BreedsLoadStart, BreedsLoadSuccess } from './breeds';
import { ImagesLoadStart, ImagesLoadSuccess } from './images';
import { SearchLoadStart, SearchLoadSuccess } from './search';
import { FavouritesLoadStart, FavouritesLoadSuccess } from './favourites';
import { VotesLoadStart, VotesLoadSuccess } from './votes';

export type Action =
	| BreedsLoadStart
	| BreedsLoadSuccess
	| ImagesLoadStart
	| ImagesLoadSuccess
	| SearchLoadStart
	| SearchLoadSuccess
	| FavouritesLoadStart
	| FavouritesLoadSuccess
	| VotesLoadStart
	| VotesLoadSuccess;

export * from './breeds';
export * from './images';
export * from './search';
export * from './navigation';
export * from './favourites';
export * from './votes';
