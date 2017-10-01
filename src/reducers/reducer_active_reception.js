import { SELECT_RECEPTION } from '../actions';

export default function (state = null, action) {
  switch (action.type) {
    case SELECT_RECEPTION:
      return action.payload;
    default:
      return state;
  }
}