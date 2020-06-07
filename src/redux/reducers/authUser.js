import { SET_SEARCH_REPO } from '../action-types';

const initialState = {
  usersRepo: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_SEARCH_REPO:
      return { ...state, usersRepo: action.payload };
    default:
      return state;
  }
}
