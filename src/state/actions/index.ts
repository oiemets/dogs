import { ActionType } from '../action-types';

export interface Breed {
  id: string;
  name: string;
  temperament: string;
  life_span: string;
  alt_names: string;
  wikipedia_url: string;
  origin: string;
  weight: object;
  country_code: string;
  height: object;
  image: {
    url: string
  };
}


interface GetBreedsAction {
  type: ActionType.GET_BREEDS;
  payload: Breed[];
}


export type Action = GetBreedsAction;