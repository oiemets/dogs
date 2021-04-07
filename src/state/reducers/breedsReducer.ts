import { ActionType } from '../action-types';
import { Action, Breed } from '../actions';

interface GetBreedsState {
  data: Breed[];
}

const initialState = {
  data: []
}


const reducer = (
  state: GetBreedsState = initialState, 
  action: Action): GetBreedsState => {
    switch(action.type) {
      case ActionType.GET_BREEDS: 
        return { data: action.payload }
      default: 
        return state;
    }
}

export default reducer;