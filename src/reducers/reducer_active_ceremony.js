import { SELECT_CEREMONY } from '../actions';

export default function (state = null, action) {
  switch (action.type) {
    case SELECT_CEREMONY:
      return action.payload;
    default:
      return state;
  }
}