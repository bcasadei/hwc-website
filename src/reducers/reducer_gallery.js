import { FETCH_GALLERY } from '../actions';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_GALLERY:
      return action.payload.data.map((obj) => {
        return {
          original: obj.media_details.sizes.full.source_url,
          thumbnail: obj.media_details.sizes.thumbnail.source_url
        }
      });
    default:
      return state;
  }
}
