import { FETCH_CONTENT } from '../actions';

export default function(state = null, action) {
  switch(action.type) {
    case FETCH_CONTENT:
      return action.payload.data[0].content.rendered;
    default:
      return state;
  }
}
