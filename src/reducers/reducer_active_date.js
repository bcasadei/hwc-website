import { SELECT_DATE } from '../actions';

export default function(state = null, action) {
  switch(action.type) {
    case SELECT_DATE:
      return action.payload;
    default:
      return state;
  }
}
