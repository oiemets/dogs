import { ThunkAction } from 'redux-thunk';
import { Breed, TheDogsAPIClient } from '../thedogsapi';
import { Action } from './actions';
import { Resource } from './resources';
import { Selector } from 'reselect';

export type AppState = {
  breeds?: Resource<Breed[]>;
}

export type Services = {
  api: TheDogsAPIClient
}

export type AppAction<T extends string, P = null> = {
  type: T;
} & (
  P extends null ? 
    unknown : 
    { payload: P }
)

export type AppCommand<T = void> = ThunkAction<
  Promise<T>,
  AppState,
  Services,
  Action
>

export type AppSelector<R> = Selector<AppState, R>