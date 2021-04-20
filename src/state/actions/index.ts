import { BreedsLoadStart, BreedsLoadSuccess } from './breeds';

export type Action = 
  | BreedsLoadStart
  | BreedsLoadSuccess;

export * from './breeds';