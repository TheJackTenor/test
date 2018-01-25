import { RECEIVE_API_DATA } from "../actions";

export default (state = {}, { type, photos }) => {
  switch (type) {
    case RECEIVE_API_DATA:
      return photos;
    default:
      return state;
  }
};
