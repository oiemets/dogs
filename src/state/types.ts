import { ThunkAction } from 'redux-thunk';
import {
	Breed,
	TheDogsAPIClient,
	PublicImage,
	BreedSearchResult,
	VoteResponse,
	FavouriteResponse,
	ActionValue,
} from '../thedogsapi';
import { Action } from './actions';
import { Resource } from './resources';
import { Selector } from 'reselect';
import { History } from 'history';

export type Favourite = FavouriteResponse & { value: ActionValue };

export type AppState = {
	breeds?: Resource<Breed[]>;
	images?: Resource<PublicImage[]>;
	search?: Resource<BreedSearchResult[]>;
	favourites?: Resource<Favourite[]>;
	votes?: Resource<VoteResponse[]>;
};

export type Services = {
	api: TheDogsAPIClient;
	history: History;
};

export type AppAction<T extends string, P = null> = {
	type: T;
} & (P extends null ? unknown : { payload: P });

export type AppCommand<T = void> = ThunkAction<
	Promise<T>,
	AppState,
	Services,
	Action
>;

export type AppSelector<R> = Selector<AppState, R>;
