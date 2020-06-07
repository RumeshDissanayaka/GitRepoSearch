import { SET_SEARCH_REPO } from '../action-types';

export const userRepositories = payload => {
  return { type: SET_SEARCH_REPO, payload };
};

