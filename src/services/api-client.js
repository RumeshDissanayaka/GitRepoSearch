import Axios from 'axios';

export const axiosClient = Axios.create({ withCredentials: false });
export const apiUrl = 'https://api.github.com';
export const readmeApiUrl = 'https://raw.githubusercontent.com'
