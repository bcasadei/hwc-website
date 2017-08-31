import { ENTER_GUESTS } from '../actions';

export default function(state = null, action) {
  switch(action.type) {
    case ENTER_GUESTS:
      return action.payload;
    default:
      return state;
  }
}