import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';


export const getBreeds = () => {
  return async (dispatch: Dispatch<Action>) => {
    const { data } = await axios.get('https://api.thedogapi.com/v1/breeds', {
      headers: { 'x-api-key': process.env.REACT_APP_API_KEY }
    });

    dispatch({ 
      type: ActionType.GET_BREEDS,
      payload: data
     });
  }
};