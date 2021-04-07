import { combineReducers } from 'redux';
import breedsReducer from './breedsReducer';


const reducers = combineReducers({ 
  breeds: breedsReducer
 });

 export default reducers;

 export type RootState = ReturnType<typeof reducers>;