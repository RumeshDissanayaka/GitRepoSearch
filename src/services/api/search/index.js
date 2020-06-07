import { axiosClient, apiUrl } from '../../api-client';

//Get repository
export const fetchRepo = username => {
  return axiosClient.get(`${apiUrl}/users/${username}/repos`);
};
