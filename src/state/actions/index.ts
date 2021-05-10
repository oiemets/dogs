import { BreedsLoadStart, BreedsLoadSuccess } from './breeds';
import { ImagesLoadStart, ImagesLoadSuccess } from './images';
import { SearchLoadStart, SearchLoadSuccess } from './search';

export type Action =
	| BreedsLoadStart
	| BreedsLoadSuccess
	| ImagesLoadStart
	| ImagesLoadSuccess
	| SearchLoadStart
	| SearchLoadSuccess;

export * from './breeds';
export * from './images';
export * from './search';
export * from './navigation';
