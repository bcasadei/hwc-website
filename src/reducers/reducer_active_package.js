import { SELECT_PACKAGE } from '../actions';

export default function(state = null, action) {
  switch(action.type) {
    case SELECT_PACKAGE:
      return action.payload;
    default:
      return state;
  }
}
