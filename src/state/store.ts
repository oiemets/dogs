import { createStore, applyMiddleware } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { Action } from './actions';
import reducers from './reducers';
import { AppState, Services } from './types';
import { createReduxLoggerMiddleware } from './middlewares';
import { useDispatch } from 'react-redux';

export type InitialAppState = Partial<AppState>;

export const createAppStore = (
  initialState: InitialAppState = {},
  services: Services
  ) => {
  return createStore(
    reducers,
    initialState,
    applyMiddleware<ThunkDispatch<AppState, Services, Action>>(
      thunk.withExtraArgument({...services}),
      createReduxLoggerMiddleware()
    )
  )
}

export type AppStore = ReturnType<typeof createAppStore>;
export type Dispatch = AppStore['dispatch'];
export const useAppDispatch: () => Dispatch = useDispatch;
