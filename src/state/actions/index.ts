import { BreedsLoadStart, BreedsLoadSuccess } from './breeds';
import { ImagesLoadStart, ImagesLoadSuccess } from './images';

export type Action =
  | BreedsLoadStart
  | BreedsLoadSuccess
  | ImagesLoadStart
  | ImagesLoadSuccess;

export * from './breeds';
export * from './images';
export * from './query-params';