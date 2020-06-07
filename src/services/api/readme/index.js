import { axiosClient, readmeApiUrl } from '../../api-client';

//Get Readme
export const fetchReadme = repo => {
  return axiosClient.get(`${readmeApiUrl}/${repo}/master/README.md`);
};
